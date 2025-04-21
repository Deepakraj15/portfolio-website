import { useState, useEffect } from 'react';

/**
 * Hook to determine if the current screen size matches a mobile device
 * @param {number} breakpoint - The width threshold (in pixels) to consider as mobile (default: 768)
 * @returns {boolean} - true if the screen width is <= breakpoint (i.e. mobile)
 */
export function usePlatform(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}
