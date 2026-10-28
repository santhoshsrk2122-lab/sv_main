// Small presentational building blocks shared by several pages.
import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import { contact, whyUs } from '../data/content.js';

const delay = i => (i % 3 ? ` d${i % 3}` : '');

export function PageHero({ image, crumbs, title, children }) {
  return (
    <section className="page-hero">
      <img src={image} alt="" fetchPriority="high" />
      <div className="container">
        <ol className="crumbs reveal">
          <li><Link to="/">Home</Link></li>
          {crumbs.map(([label, to]) => (
            <li key={label} aria-current={to ? undefined : 'page'}>{to ? <Link to={to}>{label}</Link> : label}</li>
          ))}
        </ol>
        <h1 className="reveal d1">{title}</h1>
        <p className="reveal d2">{children}</p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function CtaBand({ title = <>Ready to find your <em>new home?</em></>, text = 'Book a site visit or request a brochure — our sales team will guide you through every step.' }) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="reveal"><h2>{title}</h2><p>{text}</p></div>
        <div className="actions reveal d1">
          <Link to="/contact" className="btn btn-dark">Book a Site Visit <Icon name="arrow" className="" /></Link>
          <a href={contact.salesPhones[0][1]} className="btn btn-line-dark">Call {contact.salesPhones[0][0]}</a>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, index }) {
  return (
    <article className={`svc reveal${delay(index)}`} tabIndex={0}>
      <img src={service.img} alt={service.alt} loading="lazy" />
      <span className="svc-num">{String(index + 1).padStart(2, '0')}</span>
      <div className="svc-body">
        <div className="svc-icon"><Icon name={service.icon} /></div>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <Link to="/contact" className="more">Enquire <Icon name="arrow" size={14} /></Link>
      </div>
    </article>
  );
}

export function WhySection({ eyebrow, title }) {
  return (
    <section className="dark" id="why">
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} lead="The prime focus of developing next generation residential and commercial spaces — promoted by a team that has more than 3 decades of experience in the realty business." />
        <div className="why-grid">
          {whyUs.map(([icon, heading, text], i) => (
            <div key={heading} className={`why reveal${delay(i)}`}>
              <div className="why-icon"><Icon name={icon} /></div>
              <h3>{heading}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { delay };
