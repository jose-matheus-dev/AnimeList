import { useEffect } from 'react';

export const useImagePreload = (images: string[]) => {
  useEffect(() => {
    const preload = () => images.forEach((img) => (new Image().src = img));
    'requestIdleCallback' in window ? requestIdleCallback(preload) : setTimeout(preload, 2000);
  }, []);
};
