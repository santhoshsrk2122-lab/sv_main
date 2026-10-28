import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import Counters from '../components/Counter.jsx';
import { PageHero, SectionHead, WhySection, CtaBand } from '../components/Blocks.jsx';
import { SV } from '../data/content.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function About() {
  usePageMeta(
    'About Us | SV Groups — Bangalore Builder Since 1987',
    'Learn about SV GROUPS, a reputed Bangalore construction company since 1987, led by Chairman S. Venkatesh, with 110+ residential and 50+ commercial projects delivered.',
    SV('images/img.jpg')
  );

  return (
    <>
      <PageHero image={SV('images/Frame 128.jpg')} crumbs={[['About Us']]} title={<>About <em>SV Groups</em></>}>
        Over three decades of building homes in Bangalore with quality, finesse and a passion for innovation.
      </PageHero>

      <section id="about">
        <div className="container about-grid">
          <div className="about-media reveal">
            <img className="main" src={SV('images/img.jpg')} alt="S. Venkatesh, Chairman of SV Groups" loading="lazy" />
            <img className="inset" src={SV('images/Frame 128.jpg')} alt="SV Polaris apartment towers" loading="lazy" />
            <div className="about-badge"><strong>1987</strong><span>Building<br />Since</span></div>
            <div className="about-caption"><strong>S. Venkatesh</strong><span>Chairman</span></div>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Our Story</span>
            <h2>Simple ideas with <em>immense depth</em></h2>
            <p className="lead">A prominent construction company since 1987, SV GROUPS has marked its presence in premium urban scales and has rooted itself as a reputed construction company — maintaining high standards by striking a balance between quality and finesse across many successfully executed residential and commercial projects.</p>
            <p className="lead">Promoted by a team with more than three decades of experience in the realty business, we are passionate about harnessing innovation as a positive force for change in every element of project delivery.</p>
            <div className="mv">
              <div><h4><Icon name="target" />Quality Management</h4><p>Our QMS defines every activity, delivering a quality product at optimum cost and minimum impact on the environment. Every employee is QMS certified.</p></div>
              <div><h4><Icon name="eye" />Project Review</h4><p>A monthly review rates every ongoing project on progress, schedule, cost, quality, safety and housekeeping, with senior management present.</p></div>
            </div>
            <Counters />
          </div>
        </div>
      </section>

      <WhySection eyebrow="Our Values" title={<>What We <em>Stand For</em></>} />

      <section className="testi" id="ventures">
        <div className="container">
          <SectionHead eyebrow="Group Companies" title={<>Our <em>Ventures</em></>} />
          <div className="ventures">
            <div className="venture reveal">
              <img src={SV('images/sv-icon-new.png')} alt="SV Housing logo" loading="lazy" />
              <div>
                <h3>SV Housing</h3>
                <p>Within the realty industry, established with the prime focus of developing next generation residential and commercial spaces.</p>
                <Link to="/projects" className="link-btn">View Projects <Icon name="arrow" size={14} /></Link>
              </div>
            </div>
            <div className="venture reveal d1">
              <img src={SV('images/Frame 115.jpg')} alt="AATHAVA Food Products logo" loading="lazy" />
              <div>
                <h3>AATHAVA Food Products</h3>
                <p>The leading manufacturer and distributor of mango pulp and guava pulp.</p>
                <a href="http://www.aathavafood.com/" target="_blank" rel="noopener" className="link-btn">Visit Website <Icon name="arrow" size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
