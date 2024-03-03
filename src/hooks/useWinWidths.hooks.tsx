import { useContext, useEffect, useState } from 'react';

import { WindowContext } from '@/contexts/window.context';
import { breakpoints } from '@/styles/sizes';

const { mobile, tablet, laptop, desktop } = breakpoints.up;

const useWinWidths = () => {
  const windowContext = useContext(WindowContext);

  if (!windowContext) {
    throw new Error('WindowContext is not provided');
  }

  const { innerWidth } = windowContext;
  const [isMinMobile, setIsMinMobile] = useState(false);
  const [isMinTablet, setIsMinTablet] = useState(false);
  const [isMinLaptop, setIsMinLaptop] = useState(false);
  const [isMinDesktop, setIsMinDesktop] = useState(false);

  useEffect(() => {
    if (innerWidth) {
      setIsMinMobile(innerWidth >= mobile);
      setIsMinTablet(innerWidth >= tablet);
      setIsMinLaptop(innerWidth >= laptop);
      setIsMinDesktop(innerWidth >= desktop);
    }
  }, [innerWidth]);

  return { isMinMobile, isMinTablet, isMinLaptop, isMinDesktop };
};

export default useWinWidths;
