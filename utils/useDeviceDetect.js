import React, { useState, useEffect } from 'react';

export default function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log(`device is: ${window.navigator.userAgent}`);

    const userAgent =
      typeof navigator === undefined 
        ? ''
        : navigator.userAgent;

        comst mobile = Boolean(
          userAgent.match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
          )
        );
  }, []);
}
