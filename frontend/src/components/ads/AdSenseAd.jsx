import React, { useEffect } from 'react';

const AdSenseAd = ({ 
  client = process.env.REACT_APP_ADSENSE_PUB_ID,
  slot,
  style = { display: 'block' },
  format = "auto",
  responsive = true,
  className = ""
}) => {
  useEffect(() => {
    try {
      // Load AdSense ads
      if (window.adsbygoogle && window.adsbygoogle.push) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
};

export default AdSenseAd;