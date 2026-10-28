import { useEffect } from 'react';

// Fades in every `.reveal` element as it scrolls into view, including
// elements rendered later (e.g. after API data arrives).
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      io.unobserve(en.target);
    }), { threshold: 0.15 });

    const watch = root => {
      if (root.nodeType !== 1) return;
      if (root.matches('.reveal:not(.in)')) io.observe(root);
      root.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
    };
    watch(document.body);

    const mo = new MutationObserver(muts => muts.forEach(m => m.addedNodes.forEach(watch)));
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
}
