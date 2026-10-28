import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import Logo from './Logo.jsx';
import { contact } from '../data/content.js';

export default function Footer() {
  const [officeLabel, officeHref] = contact.officePhone;
  return (
    <footer>
      <div className="container foot-grid">
        <div className="foot-about">
          <Logo />
          <p>A prominent construction company since 1987, helping shape skylines across the residential, commercial, retail, leisure &amp; hospitality sectors.</p>
          <div className="socials">
            <a href={contact.socials.facebook} target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-3.3 0-5 2.4-5 5.5V8H6v4h3v11h5V12h3.5l.5-4z" /></svg></a>
            <a href={contact.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg></a>
            <a href={contact.socials.youtube} target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/construction">Construction</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4>Projects</h4>
          <ul>
            <li><Link to="/projects/sv-polaris">SV Polaris – Panathur</Link></li>
            <li><Link to="/projects/sv-grandur">SV Grandur – Electronic City</Link></li>
            <li><Link to="/projects#completed">Completed Projects</Link></li>
            <li><a href={contact.brochure} target="_blank" rel="noopener">Download Brochure</a></li>
          </ul>
        </div>
        <div>
          <h4>Head Office</h4>
          <ul className="foot-contact">
            <li><Icon name="pin" /><span>{contact.office}</span></li>
            <li><Icon name="phone" /><a href={officeHref}>{officeLabel}</a></li>
            <li><Icon name="phone" /><a href={contact.salesPhones[0][1]}>+91 93805 22599 / 93805 22566</a></li>
            <li><Icon name="mail" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© {new Date().getFullYear()} SV Groups. All rights reserved.</span>
        <span><a href="https://www.svgroups.in/" target="_blank" rel="noopener">www.svgroups.in</a></span>
      </div>
    </footer>
  );
}
