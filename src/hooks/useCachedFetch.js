import { useEffect, useState } from 'react';
import { readCache, writeCache } from '../utils/storage';
import queuedJson from '../utils/requestQueue';

function useCachedFetch(cacheKey, url, options = {}) {
  const { enabled = true } = options;
  const [cached] = useState(() => readCache(cacheKey));
  const [data, setData] = useState(cached);
  const [isLoading, setIsLoading] = useState(() => Boolean(enabled && url && !cached));
  const [error, setError] = useState();
  const shouldFetch = Boolean(enabled && url && !cached);

  useEffect(() => {
    if (!shouldFetch) {
      return undefined;
    }

    let cancelled = false;
    setIsLoading(true);

    queuedJson(url).then(payload => {
      if (cancelled) {
        return;
      }

      if (payload) {
        writeCache(cacheKey, payload);
        setData(payload);
      } else {
        setError(new Error('Fetch failed'));
      }

      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [cacheKey, url, shouldFetch]);

  return {
    data: data || null,
    isLoading: Boolean(shouldFetch && isLoading),
    error: cached ? undefined : error,
  };
}

export default useCachedFetch;
