import Reviews from '../components/Reviews.jsx';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks.jsx';
import { SV } from '../data/content.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function Testimonials() {
  usePageMeta(
    'Testimonials | What Our Customers Say — SV Groups',
    'Read reviews from SV Groups homeowners at SV Polaris and SV Grandur about construction quality, amenities and our sales team.'
  );

  return (
    <>
      <PageHero image={SV('images/Frame 101.jpg')} crumbs={[['Testimonials']]} title={<>Customer <em>Stories</em></>}>
        More than 1000 happy customers — here is what homeowners say about living in an SV GROUPS home.
      </PageHero>

      <section className="testi">
        <div className="container">
          <SectionHead eyebrow="Reviews" title={<>What Our <em>Customers Say</em></>} />
          <Reviews />
        </div>
      </section>

      <CtaBand title={<>Join our family of <em>1000+ homeowners</em></>} />
    </>
  );
}
