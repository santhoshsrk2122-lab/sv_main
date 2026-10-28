import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import LightboxGroup from '../components/Lightbox.jsx';
import { PageHero, CtaBand } from '../components/Blocks.jsx';
import NotFound from './NotFound.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { data: p, loading, error } = useApi(`/projects/${slug}`);
  usePageMeta(p?.meta.title, p?.meta.description, p?.hero);

  if (error?.message === 'not-found') return <NotFound />;
  if (loading || !p) return <section className="page-hero" aria-busy="true" />;

  return (
    <>
      <PageHero image={p.hero} crumbs={[['Projects', '/projects'], [p.name]]} title={p.name}>{p.tagline}</PageHero>

      <section>
        <div className="container">
          <LightboxGroup className="pd-gallery reveal">
            {p.gallery.map(([src, alt]) => <img key={src} src={src} alt={alt} loading="lazy" />)}
          </LightboxGroup>
          <div className="pd-grid">
            <div className="pd-main">
              <div className="pd-block reveal">
                <span className="eyebrow">Overview</span>
                <h2>{p.heading[0]} <em>{p.heading[1]}</em></h2>
                {p.overview.map(text => <p key={text} className="lead">{text}</p>)}
                <ul className="ticks">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul>
              </div>
              <div className="pd-block reveal">
                <span className="eyebrow">Lifestyle</span>
                <h2>{p.amenitiesTitle[0]} <em>{p.amenitiesTitle[1]}</em></h2>
                <div className="amen">
                  {p.amenities.map(([icon, label]) => <div key={label}><Icon name={icon} />{label}</div>)}
                </div>
              </div>
              <div className="pd-block reveal">
                <span className="eyebrow">Plans</span>
                <h2>Master &amp; <em>Floor Plans</em></h2>
                {p.plans.map(([title, src, alt]) => (
                  <div key={src}>
                    <h3 style={{ marginTop: 36 }}>{title}</h3>
                    <LightboxGroup><img className="plan-img" src={src} alt={alt} loading="lazy" /></LightboxGroup>
                  </div>
                ))}
              </div>
              <div className="pd-block reveal">
                <span className="eyebrow">Location</span>
                <h2>Where <em>You'll Live</em></h2>
                <div className="map-box">
                  <iframe title={`${p.name} location map`} src={`https://maps.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&z=14&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <p style={{ marginTop: 16 }}>
                  <a className="link-btn" href={p.mapLink} target="_blank" rel="noopener">Open in Google Maps <Icon name="arrow" size={14} /></a>
                </p>
              </div>
            </div>
            <aside className="pd-aside">
              <div className="facts reveal">
                <h3>Project Facts</h3>
                <ul>{p.facts.map(([k, v]) => <li key={k}><span>{k}</span><b>{v}</b></li>)}</ul>
                <Link to={`/contact?project=${encodeURIComponent(p.name)}`} className="btn btn-gold">Schedule a Site Visit <Icon name="arrow" className="" /></Link>
              </div>
              <div className="doc-list reveal d1">
                {p.docs.map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noopener">{label === 'Brochure' ? 'Download Brochure' : label}<Icon name="download" /></a>
                ))}
                <a href={p.mapLink} target="_blank" rel="noopener">View Location<Icon name="pin" /></a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand title={<>Interested in <em>{p.name}?</em></>} text="Talk to our sales team for pricing, availability and a guided site visit." />
    </>
  );
}
