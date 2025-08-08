import { useEffect, useState } from 'react';

export const useUTMParams = () => {
  const [utmParams, setUtmParams] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    const utms = new URLSearchParams();
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        utms.append(key, value);
      }
    });

    setUtmParams(utms.toString());
  }, []);

  const getCheckoutUrlWithUTMs = (baseUrl: string) => {
    if (!utmParams) return baseUrl;
    
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${utmParams}`;
  };

  return { getCheckoutUrlWithUTMs };
};