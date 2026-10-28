import { useEffect } from 'react';

const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute('content', value);

export function usePageMeta(title, description, image) {
  useEffect(() => {
    if (!title) return;
    document.title = title;
    setMeta('meta[property="og:title"]', title);
    if (description) {
      setMeta('meta[name="description"]', description);
      setMeta('meta[property="og:description"]', description);
    }
    if (image) setMeta('meta[property="og:image"]', image);
  }, [title, description, image]);
}
