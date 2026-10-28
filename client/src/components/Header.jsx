import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import Logo from './Logo.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeOnLink = e => { if (e.target.closest('a')) setOpen(false); };

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="container">
        <Logo />
        <nav aria-label="Main">
          <ul className={`nav-links${open ? ' open' : ''}`} onClick={closeOnLink}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li className="has-drop">
              <NavLink to="/projects">Projects <Icon name="chev" className="" /></NavLink>
              <ul className="drop">
                <li><Link to="/projects/sv-polaris">SV Polaris<small>Panathur, Marathahalli</small></Link></li>
                <li><Link to="/projects/sv-grandur">SV Grandur<small>Electronic City Phase 2</small></Link></li>
                <li><Link to="/projects#completed">Completed Projects<small>Delivered residences</small></Link></li>
              </ul>
            </li>
            <li><NavLink to="/construction">Construction</NavLink></li>
            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li className="mobile-quote"><Link to="/contact" className="btn btn-gold">Enquire Now</Link></li>
          </ul>
        </nav>
        <Link to="/contact" className="btn btn-gold">Enquire Now</Link>
        <button className={`burger${open ? ' open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
