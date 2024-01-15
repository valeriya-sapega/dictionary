import { useEffect } from 'react';

export const useClickOutside = (ref, setState, arg) => {
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) {
        return;
      }

      if (!ref.current.contains(e.target)) {
        setState(arg);
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [ref, setState]);
};
