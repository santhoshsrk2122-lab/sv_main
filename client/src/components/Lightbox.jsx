import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Wrap any images; clicking one opens a full-screen viewer over all images in the group.
export default function LightboxGroup({ className, children }) {
  const [set, setSet] = useState([]);
  const [idx, setIdx] = useState(-1);
  const open = idx >= 0;

  const show = n => setIdx((n + set.length) % set.length);
  const close = () => setIdx(-1);

  const onClick = e => {
    const img = e.target.closest('img');
    if (!img) return;
    const imgs = [...e.currentTarget.querySelectorAll('img')].map(i => ({ src: i.src, alt: i.alt }));
    setSet(imgs);
    setIdx(imgs.findIndex(i => i.src === img.src));
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = e => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + set.length) % set.length);
      else if (e.key === 'ArrowRight') setIdx(i => (i + 1) % set.length);
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
  }, [open, set.length]);

  return (
    <>
      <div className={className} onClick={onClick}>{children}</div>
      {open && createPortal(
        <div className="lightbox open" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={e => e.target === e.currentTarget && close()}>
          <button className="lb-btn lb-close" aria-label="Close" onClick={close}>×</button>
          <button className="lb-btn lb-prev" aria-label="Previous" onClick={() => show(idx - 1)}>‹</button>
          <img key={set[idx].src} src={set[idx].src} alt={set[idx].alt} />
          <button className="lb-btn lb-next" aria-label="Next" onClick={() => show(idx + 1)}>›</button>
          <span className="lb-count">{idx + 1} / {set.length}</span>
        </div>,
        document.body
      )}
    </>
  );
}
