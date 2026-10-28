import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="SV Groups home">
      <img className="logo-mark" src="https://www.svgroups.in/images/sv-icon-new.png" alt="" />
      <span className="logo-text"><strong>SV GROUPS</strong><span>Since 1987</span></span>
    </Link>
  );
}
