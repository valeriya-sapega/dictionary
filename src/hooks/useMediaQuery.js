import { useEffect, useMemo, useState } from 'react';

function useMediaQuery(query) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, [mediaQuery]);

  return match;
}

export const useMediaQueries = () => {
  const mobile = useMediaQuery('(max-width: 576px)');
  const other = useMediaQuery('(min-width: 577px)');

  return { mobile, other };
};
