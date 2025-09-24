import React, { useEffect } from 'react';

const AdSenseAd = ({ 
  client = "ca-pub-8306818191166444",
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

  const adSlotId = slot === 'banner'
    ? process.env.REACT_APP_ADSENSE_BANNER_SLOT_ID
    : process.env.REACT_APP_ADSENSE_RECTANGLE_SLOT_ID;

  if (!adSlotId) {
    return (
      <div className="text-center my-4 p-4 bg-red-100 text-red-700">
        AdSense ad slot ID is not configured.
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={client}
      data-ad-slot={adSlotId}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
};

export default AdSenseAd;