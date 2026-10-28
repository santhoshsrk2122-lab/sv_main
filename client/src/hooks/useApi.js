import { useEffect, useState } from 'react';

const cache = new Map();

// Fetch JSON from the Node API, cached per path for the session.
export function useApi(path) {
  const [state, setState] = useState(() =>
    cache.has(path) ? { data: cache.get(path), loading: false, error: null } : { data: null, loading: true, error: null }
  );

  useEffect(() => {
    if (cache.has(path)) {
      setState({ data: cache.get(path), loading: false, error: null });
      return;
    }
    let active = true;
    setState({ data: null, loading: true, error: null });
    fetch(`/api${path}`)
      .then(res => (res.ok ? res.json() : Promise.reject(new Error(res.status === 404 ? 'not-found' : 'failed'))))
      .then(data => {
        cache.set(path, data);
        if (active) setState({ data, loading: false, error: null });
      })
      .catch(error => active && setState({ data: null, loading: false, error }));
    return () => { active = false; };
  }, [path]);

  return state;
}
