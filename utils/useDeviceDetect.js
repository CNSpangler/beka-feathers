import { useState, useEffect } from 'react';

export default function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log(`device is: ${window.navigator.userAgent}`);

    const userAgent =
      typeof navigator === undefined 
        ? ''
        : navigator.userAgent;

    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(mobile);
  }, []);

  return { isMobile };
}
