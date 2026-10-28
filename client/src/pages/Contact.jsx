import { Icon } from '../components/Icons.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { PageHero, SectionHead } from '../components/Blocks.jsx';
import { SV, contact, faqs } from '../data/content.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function Contact() {
  usePageMeta(
    'Contact Us | SV Groups — Marathahalli, Bangalore',
    'Contact SV Groups for site visits, brochures and pricing. Head office: V.M. Cosma, Karthik Nagar, Marathahalli, Bangalore. Call 080-29505657 or +91 93805 22599.'
  );

  return (
    <>
      <PageHero image={SV('images/Frame 128.jpg')} crumbs={[['Contact Us']]} title={<>Get In <em>Touch</em></>}>
        Site visits, floor plans, brochures or pricing — we'd love to hear from you.
      </PageHero>

      <section className="services">
        <div className="container">
          <div className="office-grid">
            <div className="office reveal">
              <div className="why-icon"><Icon name="pin" /></div>
              <h3>Head Office</h3>
              <p>{contact.office}</p>
            </div>
            <div className="office reveal d1">
              <div className="why-icon"><Icon name="phone" /></div>
              <h3>Call Us</h3>
              <a href={contact.officePhone[1]}>Head Office: {contact.officePhone[0]}</a>
              {contact.salesPhones.map(([label, href]) => <a key={href} href={href}>Sales: {label}</a>)}
            </div>
            <div className="office reveal d2">
              <div className="why-icon"><Icon name="mail" /></div>
              <h3>Email Us</h3>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <p style={{ marginTop: 8 }}>Our team replies to every enquiry.</p>
            </div>
          </div>
          <div className="contact-split">
            <EnquiryForm className="reveal d1" title="Send an Enquiry" intro="Tell us what you are looking for and we will get back to you shortly." />
            <div className="map-box reveal d1">
              <iframe title="SV Groups head office location" src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead eyebrow="FAQ" title={<>Frequently Asked <em>Questions</em></>} />
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q} className="reveal"><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
