import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { PageHero, SectionHead, ServiceCard, CtaBand } from '../components/Blocks.jsx';
import { SV, services, journey } from '../data/content.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function Construction() {
  usePageMeta(
    'Construction | MIVAN Technology & Quality — SV Groups',
    'How SV Groups builds: MIVAN aluminium formwork, 100% concrete walls, 80%+ open space, Vastu-compliant layouts and QMS-driven quality management.'
  );

  return (
    <>
      <PageHero image={SV('images/2.jpg')} crumbs={[['Construction']]} title={<>Built To <em>Last</em></>}>
        Quality of construction and durability are our prime considerations — from the formwork system to the open space around every home.
      </PageHero>

      <section className="services">
        <div className="container">
          <SectionHead eyebrow="How We Build" title={<>Our Construction <em>Advantages</em></>} lead="Six reasons our homes stay stronger, brighter and more spacious for decades." />
          <div className="svc-grid">
            {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="container split rev">
          <div className="split-img reveal"><img src={SV('images/Frame 100.jpg')} alt="SV Grandur towers built with concrete walls" loading="lazy" /></div>
          <div className="reveal d1">
            <span className="eyebrow">Quality Assurance</span>
            <h2>Quality you can <em>measure</em></h2>
            <p className="lead">Our Quality Management System defines every activity on site, delivering a quality product at optimum cost and minimum impact on the environment.</p>
            <ul className="ticks">
              <li>Every employee is QMS certified</li>
              <li>Monthly Project Review Management with senior management present</li>
              <li>Projects rated on progress, schedule, cost, quality, safety and housekeeping</li>
              <li>No additional plastering needed on MIVAN walls and slabs</li>
            </ul>
            <Link to="/projects" className="btn btn-dark">See Our Projects <Icon name="arrow" className="" /></Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <SectionHead eyebrow="Your Journey" title={<>From Enquiry <em>To Keys</em></>} />
          <div className="timeline">
            {journey.map(([icon, title, text], i) => (
              <div key={title} className={`step reveal${i ? ` d${i}` : ''}`}>
                <div className="step-dot"><Icon name={icon} /><span className="step-num">{i + 1}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
