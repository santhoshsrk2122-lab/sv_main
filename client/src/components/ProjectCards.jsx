import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import { useApi } from '../hooks/useApi.js';
import { delay } from './Blocks.jsx';

function ProjectCard({ p, index }) {
  const url = `/projects/${p.slug}`;
  return (
    <article className={`proj reveal${delay(index)}`}>
      <Link className="proj-img" to={url}>
        <img src={p.img} alt={`${p.name} — ${p.type} in ${p.loc}`} loading="lazy" />
        <span className="tag">{p.type}</span>
      </Link>
      <div className="proj-body">
        <div className="proj-loc"><Icon name="pin" />{p.loc}</div>
        <h3><Link to={url}>{p.name}</Link></h3>
        <div className="proj-meta"><span><b>{p.beds}</b></span><span>{p.units}</span></div>
        <div className="proj-foot">
          <div className="price"><small>Apartments in</small>{p.loc.split(',')[0]}</div>
          <Link className="link-btn" to={url}>View Project <Icon name="arrow" size={14} /></Link>
        </div>
        <div className="proj-docs">
          {p.docs.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener">{label}</a>)}
        </div>
      </div>
    </article>
  );
}

export default function ProjectCards() {
  const { data, error } = useApi('/projects');
  if (error) return <p className="lead">Projects could not be loaded. Please refresh the page.</p>;
  return (
    <div className="proj-grid two">
      {data?.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
    </div>
  );
}
