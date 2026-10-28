import { useEffect, useRef, useState } from 'react';
import { counters } from '../data/content.js';

function Counter({ end, label }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1800;
      const tick = t => {
        const k = Math.min((t - t0) / dur, 1);
        setValue(Math.floor(end * (1 - Math.pow(1 - k, 3))));
        if (k < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [end]);

  return (
    <div className="counter" ref={ref}>
      <strong>{value.toLocaleString('en-IN')}</strong><strong><sup>+</sup></strong><span>{label}</span>
    </div>
  );
}

export default function Counters() {
  return (
    <div className="counters">
      {counters.map(([end, label]) => <Counter key={label} end={end} label={label} />)}
    </div>
  );
}
