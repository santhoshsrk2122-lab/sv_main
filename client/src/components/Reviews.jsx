import { useApi } from '../hooks/useApi.js';
import { delay } from './Blocks.jsx';

const initials = name => {
  const w = name.split(' ');
  return w.length > 1 ? w[0][0] + w[w.length - 1][0] : w[0][0];
};

export default function Reviews({ limit }) {
  const { data } = useApi(limit ? `/testimonials?limit=${limit}` : '/testimonials');
  return (
    <div className="testi-grid">
      {data?.map(({ quote, name }, i) => (
        <figure key={name} className={`review reveal${delay(i)}`}>
          <span className="quote">&rdquo;</span>
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>{quote}</blockquote>
          <figcaption className="reviewer">
            <span className="avatar" aria-hidden="true">{initials(name)}</span>
            <div><strong>{name}</strong><span>SV Groups Customer</span></div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
