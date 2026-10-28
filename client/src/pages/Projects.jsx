import ProjectCards from '../components/ProjectCards.jsx';
import LightboxGroup from '../components/Lightbox.jsx';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks.jsx';
import { SV } from '../data/content.js';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function Projects() {
  usePageMeta(
    'Projects | SV Polaris, SV Grandur & Completed Projects — SV Groups',
    'Explore SV Groups ongoing projects — SV Polaris in Panathur and SV Grandur in Electronic City — plus a gallery of completed residences across Bangalore.'
  );
  const { data: gallery } = useApi('/gallery');

  return (
    <>
      <PageHero image={SV('images/Frame 99.jpg')} crumbs={[['Projects']]} title={<>Our <em>Projects</em></>}>
        Beautifully appointed 2 BHK and 3 BHK apartments in Bangalore's most connected neighbourhoods.
      </PageHero>

      <section>
        <div className="container">
          <div className="proj-top">
            <div className="reveal">
              <span className="eyebrow">Now Selling</span>
              <h2 style={{ margin: 0 }}>Featured <em>Projects</em></h2>
            </div>
            <p className="lead reveal d1" style={{ maxWidth: 440 }}>Download brochures, master plans and floor plans, or open a project for the full details.</p>
          </div>
          <ProjectCards />
        </div>
      </section>

      <section className="services" id="completed">
        <div className="container">
          <SectionHead eyebrow="Our Legacy" title={<>Completed <em>Projects</em></>} lead="A selection of residences delivered by SV GROUPS. Click any image to view it full size." />
          <LightboxGroup className="gallery">
            {gallery?.map((src, i) => (
              <img key={src} className={`reveal${i % 4 ? ` d${i % 4}` : ''}`} src={src} alt={`Completed SV Groups project ${i + 1}`} loading="lazy" />
            ))}
          </LightboxGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
