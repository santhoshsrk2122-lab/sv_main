import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { PageHero } from '../components/Blocks.jsx';
import { SV } from '../data/content.js';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta('Page Not Found — SV Groups', 'The page you are looking for does not exist.');
  return (
    <>
      <PageHero image={SV('images/Frame 128.jpg')} crumbs={[['Not Found']]} title={<>Page <em>Not Found</em></>}>
        The page you are looking for has moved or no longer exists.
      </PageHero>
      <section>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" className="btn btn-dark">Back to Home <Icon name="arrow" className="" /></Link>
        </div>
      </section>
    </>
  );
}
