import { useEffect, useState } from 'react';

export default function HeroSlider({ slides }) {
  const [cur, setCur] = useState(0);
  const [cycle, setCycle] = useState(0); // bump to restart the timer after a manual pick

  useEffect(() => {
    const timer = setInterval(() => setCur(c => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length, cycle]);

  const go = i => { setCur(i); setCycle(c => c + 1); };

  return (
    <>
      <div className="hero-slides">
        {slides.map(([src, alt], i) => (
          <img key={src} className={i === cur ? 'active' : undefined} src={src} alt={alt}
            fetchPriority={i === 0 ? 'high' : undefined} loading={i === 0 ? undefined : 'lazy'} />
        ))}
      </div>
      <div className="hero-dots" aria-label="Slides">
        {slides.map(([src], i) => (
          <button key={src} className={i === cur ? 'active' : undefined} aria-label={`Slide ${i + 1}`} onClick={() => go(i)} />
        ))}
      </div>
    </>
  );
}
