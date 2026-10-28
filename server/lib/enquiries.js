import { appendFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';
import { enquiryOptions } from '../data/projects.js';

// Vercel's filesystem is read-only except for /tmp (and /tmp is not persistent),
// so on Vercel configure SMTP to actually receive enquiries.
const LOG_FILE = process.env.VERCEL
  ? join(tmpdir(), 'enquiries.jsonl')
  : join(dirname(fileURLToPath(import.meta.url)), '../data/enquiries.jsonl');

const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export function validateEnquiry(body = {}) {
  const enquiry = {
    name: clean(body.name, 100),
    mobile: clean(body.mobile, 20),
    email: clean(body.email, 150),
    service: clean(body.service, 100),
    message: clean(body.message, 2000)
  };
  const errors = {};
  if (!enquiry.name) errors.name = 'Please enter your name.';
  if (!/^[0-9+\s-]{10,15}$/.test(enquiry.mobile)) errors.mobile = 'Please enter a valid contact number.';
  if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) errors.email = 'Please enter a valid email.';
  if (!enquiryOptions.includes(enquiry.service)) errors.service = 'Please select a project.';
  return { enquiry, errors };
}

let transport;
function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST) return null;
  transport ??= nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined
  });
  return transport;
}

export async function saveEnquiry(enquiry) {
  const record = { ...enquiry, receivedAt: new Date().toISOString() };

  try {
    await mkdir(dirname(LOG_FILE), { recursive: true });
    await appendFile(LOG_FILE, JSON.stringify(record) + '\n');
  } catch (err) {
    console.error('Could not write enquiry log:', err.message);
  }

  const mailer = getTransport();
  if (!mailer) {
    console.log('New enquiry (SMTP not configured):', record);
    return;
  }
  await mailer.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.ENQUIRY_TO || 'svpolaris@svgroups.in',
    replyTo: enquiry.email || undefined,
    subject: `New enquiry: ${enquiry.service} — ${enquiry.name}`,
    text: [
      `Name: ${enquiry.name}`,
      `Mobile: ${enquiry.mobile}`,
      `Email: ${enquiry.email || '-'}`,
      `Interested in: ${enquiry.service}`,
      '',
      enquiry.message || '(no description)',
      '',
      `Received: ${record.receivedAt}`
    ].join('\n')
  });
}
