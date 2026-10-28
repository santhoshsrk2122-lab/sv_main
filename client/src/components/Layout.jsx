import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { IconSprite } from './Icons.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { contact } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';

// Scroll to top on navigation, or to #hash targets (which may render after data loads).
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    let tries = 0;
    const find = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView();
      else if (tries++ < 20) timer = setTimeout(find, 100);
    };
    let timer = setTimeout(find, 0);
    return () => clearTimeout(timer);
  }, [pathname, hash]);
}

export default function Layout() {
  const [showTop, setShowTop] = useState(false);
  useReveal();
  useScrollOnNavigate();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <IconSprite />
      <Header />
      <main><Outlet /></main>
      <Footer />

      <div className="floats">
        <a className="fl-wa" href={contact.whatsapp} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
          <span>Chat on WhatsApp</span>
          <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 012.2 12 9.8 9.8 0 0112 2.2a9.8 9.8 0 019.8 9.8 9.8 9.8 0 01-9.8 9.8zM20.5 3.5A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.9 11.9 0 005.7 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3z" /></svg>
        </a>
        <a className="fl-call" href={contact.salesPhones[0][1]} aria-label="Call us">
          <span>Call Sales</span>
          <svg viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2a15 15 0 01-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1A11.4 11.4 0 018.5 4c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" /></svg>
        </a>
      </div>
      <button className={`to-top${showTop ? ' show' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })}>
        <svg className="ic" style={{ width: 20, height: 20, transform: 'rotate(-90deg)' }}><use href="#i-arrow" /></svg>
      </button>
    </>
  );
}
