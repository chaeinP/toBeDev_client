import { MOBILE_WIDTH } from '@styles/media';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: `(max-width: ${MOBILE_WIDTH})` });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
}
