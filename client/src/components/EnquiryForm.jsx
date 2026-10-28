import { useId, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import { useApi } from '../hooks/useApi.js';

const FALLBACK_OPTIONS = ['SV Polaris – Panathur', 'SV Grandur – Electronic City', 'General Enquiry'];

export default function EnquiryForm({ title, intro, className = '' }) {
  const id = useId();
  const [params] = useSearchParams();
  const options = useApi('/enquiry-options').data ?? FALLBACK_OPTIONS;
  const wanted = params.get('project');
  const preselect = wanted ? options.find(o => o.startsWith(wanted)) ?? '' : '';

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const body = Object.fromEntries(new FormData(form));
    setStatus({ state: 'sending', message: '' });
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.errors ? Object.values(json.errors).join(' ') : json.error);
      setStatus({ state: 'sent', message: `Thank you, ${body.name.split(' ')[0]}! The SV Groups sales team will get in touch with you shortly.` });
      form.reset();
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong. Please call +91 93805 22599.' });
    }
  };

  const f = name => `${id}-${name}`;
  return (
    <form className={`form enquiry-form ${className}`} noValidate onSubmit={onSubmit}>
      <h3>{title}</h3>
      <p>{intro}</p>
      <div className="fgrid">
        <div className="field"><label htmlFor={f('name')}>Name *</label><input id={f('name')} name="name" required placeholder="Your full name" autoComplete="name" /></div>
        <div className="field"><label htmlFor={f('mobile')}>Contact Number *</label><input id={f('mobile')} name="mobile" type="tel" required pattern="[0-9+\s\-]{10,15}" placeholder="+91 00000 00000" autoComplete="tel" /></div>
        <div className="field"><label htmlFor={f('email')}>Email</label><input id={f('email')} name="email" type="email" placeholder="you@example.com" autoComplete="email" /></div>
        <div className="field"><label htmlFor={f('service')}>Interested In *</label>
          <select id={f('service')} name="service" required defaultValue={preselect} key={preselect}>
            <option value="">Select a project</option>
            {options.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="field full"><label htmlFor={f('message')}>Description</label><textarea id={f('message')} name="message" placeholder="2 BHK / 3 BHK, site visit, brochure..." /></div>
      </div>
      <button type="submit" className="btn btn-dark" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Sending…' : <>Submit Enquiry <Icon name="arrow" className="" /></>}
      </button>
      <div className={`form-msg${status.message ? ' show' : ''}${status.state === 'error' ? ' error' : ''}`} role="status">{status.message}</div>
    </form>
  );
}
