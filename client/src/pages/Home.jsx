import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import Counters from '../components/Counter.jsx';
import ProjectCards from '../components/ProjectCards.jsx';
import Reviews from '../components/Reviews.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { SectionHead, ServiceCard, WhySection } from '../components/Blocks.jsx';
import { SV, contact, services } from '../data/content.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

const slides = [
  [SV('images/1.jpg'), 'SV Polaris apartments in Panathur, aerial night view'],
  [SV('images/Frame 128.jpg'), 'SV Polaris apartment towers, Panathur'],
  [SV('images/Frame 99.jpg'), 'SV Grandur apartments in Electronic City']
];

export default function Home() {
  usePageMeta(
    'SV Groups | 2 & 3 BHK Apartments in Bangalore — SV Polaris, SV Grandur',
    'SV GROUPS — a prominent construction company in Bangalore since 1987. Premium 2 & 3 BHK apartments at SV Polaris, Panathur and SV Grandur, Electronic City, built with 100% concrete walls and 80%+ open space.',
    SV('images/1.jpg')
  );

  return (
    <>
      <section className="hero" id="home">
        <HeroSlider slides={slides} />
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow reveal" style={{ color: 'var(--gold)' }}>Apartments in Bangalore · Since 1987</span>
            <h1 className="reveal d1">Quality &amp; Passion<br /><em>With Our Services.</em></h1>
            <p className="reveal d2">A prominent construction company since 1987, SV GROUPS develops next-generation residential and commercial spaces — homes with 100% concrete walls, abundant open space and Vastu-compliant 2 &amp; 3 BHK apartments.</p>
            <div className="hero-cta reveal d3">
              <Link to="/projects" className="btn btn-gold">Explore Projects <Icon name="arrow" className="" /></Link>
              <Link to="/contact" className="btn btn-outline">Get a Consultation</Link>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><strong>1987</strong><span>Established</span></div>
          <div className="hero-stat"><strong>1000+</strong><span>Happy Customers</span></div>
        </div>
        <div className="scroll-cue">Scroll</div>
      </section>

      <section>
        <div className="container split">
          <div className="split-img reveal"><img src={SV('images/Frame 128.jpg')} alt="SV Polaris apartment towers in Panathur" loading="lazy" /></div>
          <div className="reveal d1">
            <span className="eyebrow">About SV Groups</span>
            <h2>Simple ideas with <em>immense depth</em></h2>
            <p className="lead">For more than three decades SV GROUPS has built homes across Bangalore that balance quality and finesse — residential, commercial and industrial projects delivered by a team passionate about innovation in every element of project delivery.</p>
            <ul className="ticks">
              <li>Aluminium Formwork (MIVAN) construction with 100% concrete walls</li>
              <li>QMS-certified teams and monthly project reviews</li>
              <li>Vastu-compliant homes with 80%+ open space</li>
            </ul>
            <Link to="/about" className="btn btn-dark">Discover Our Story <Icon name="arrow" className="" /></Link>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="container reveal"><Counters /></div>
      </div>

      <section id="projects">
        <div className="container">
          <div className="proj-top">
            <div className="reveal">
              <span className="eyebrow">Our Projects</span>
              <h2 style={{ margin: 0 }}>Featured <em>Projects</em></h2>
            </div>
            <p className="lead reveal d1" style={{ maxWidth: 440 }}>Beautifully appointed 2 BHK and 3 BHK apartments in Bangalore's most connected neighbourhoods.</p>
          </div>
          <ProjectCards />
          <div className="section-foot reveal"><Link to="/projects" className="btn btn-dark">View All Projects <Icon name="arrow" className="" /></Link></div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <SectionHead eyebrow="How We Build" title={<>Built To <em>Last</em></>} lead="Quality of construction and durability are our prime considerations — from the formwork system to the open space around every home." />
          <div className="svc-grid">
            {services.slice(0, 3).map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
          </div>
          <div className="section-foot reveal"><Link to="/construction" className="btn btn-dark">Explore Our Construction <Icon name="arrow" className="" /></Link></div>
        </div>
      </section>

      <WhySection eyebrow="Why SV Groups" title={<>Why <em>Choose Us</em></>} />

      <section className="testi">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title={<>What Our <em>Customers Say</em></>} />
          <Reviews limit={3} />
          <div className="testi-more"><Link to="/testimonials" className="btn btn-dark">Read All Reviews <Icon name="arrow" className="" /></Link></div>
        </div>
      </section>

      <section className="consult" id="contact">
        <img src={SV('images/Frame 128.jpg')} alt="" loading="lazy" />
        <div className="container consult-grid">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>Get a Consultation Now</span>
            <h2>Have Any Questions? <em>Contact Us Any Time</em></h2>
            <p className="lead">Don't hesitate to reach out — our sales team will help you with site visits, floor plans, brochures and pricing.</p>
            <div className="contact-list">
              <a href={contact.officePhone[1]}><span className="ci"><Icon name="phone" /></span><span><small>Head Office</small>{contact.officePhone[0]}</span></a>
              <a href={contact.salesPhones[0][1]}><span className="ci"><Icon name="phone" /></span><span><small>Sales Office</small>+91 93805 22599 / 93805 22566</span></a>
              <a href={`mailto:${contact.email}`}><span className="ci"><Icon name="mail" /></span><span><small>Email</small>{contact.email}</span></a>
            </div>
          </div>
          <EnquiryForm className="reveal d1" title="Enquiry Form" intro="Share your details and our team will get in touch." />
        </div>
      </section>
    </>
  );
}
