import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth <= 768; 
  });

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return {
    isMobile,
    isDesktop: !isMobile
  };
};