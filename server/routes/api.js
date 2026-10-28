import { Router } from 'express';
import { projects, completed, enquiryOptions } from '../data/projects.js';
import { testimonials } from '../data/testimonials.js';
import { validateEnquiry, saveEnquiry } from '../lib/enquiries.js';

const router = Router();

router.get('/health', (req, res) => res.json({ ok: true }));

router.get('/projects', (req, res) => res.json(projects));

router.get('/projects/:slug', (req, res) => {
  const project = projects.find(p => p.slug === req.params.slug);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

router.get('/gallery', (req, res) => res.json(completed));

router.get('/testimonials', (req, res) => {
  const limit = Number(req.query.limit) || testimonials.length;
  res.json(testimonials.slice(0, limit));
});

router.get('/enquiry-options', (req, res) => res.json(enquiryOptions));

router.post('/enquiries', async (req, res) => {
  const { enquiry, errors } = validateEnquiry(req.body);
  if (Object.keys(errors).length) return res.status(400).json({ errors });
  try {
    await saveEnquiry(enquiry);
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Failed to send enquiry:', err);
    res.status(500).json({ error: 'Could not send your enquiry. Please call us instead.' });
  }
});

router.use((req, res) => res.status(404).json({ error: 'Not found' }));

export default router;
