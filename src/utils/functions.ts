import { AxiosError } from 'axios';

import { breakpoints, device } from '../styles/sizes';
import { CSSProperty, StatusCode } from './types.d';

const BASE_FONT_SIZE = 16;
const { mobile, tablet, laptop, desktop } = breakpoints.up;

export const pxToRem = (pxSize: number): string => {
  return `${pxSize / BASE_FONT_SIZE}rem`;
};

export const pxToEm = (pxSize: number): string => {
  return `${pxSize / BASE_FONT_SIZE}em`;
};

export const fluidSize = (
  minSize: number,
  maxSize: number,
  minVW: number,
  maxVW: number
): string => {
  const slope = (maxSize - minSize) / (maxVW - minVW);
  let vwFactor = slope * 100;
  let remFactor = (minSize - minVW * slope) / 16;

  // Convert px to rem
  var minRem = minSize / 16;
  var maxRem = maxSize / 16;

  // Round to nearest x decimal places (1000 for 3 decimal places)
  const rounder = 1000;
  minRem = Math.round(minRem * rounder) / rounder;
  vwFactor = Math.round(vwFactor * rounder) / rounder;
  remFactor = Math.round(remFactor * rounder) / rounder;
  maxRem = Math.round(maxRem * rounder) / rounder;

  if (minRem > maxRem) {
    // Swap the values
    let temp = minRem;
    minRem = maxRem;
    maxRem = temp;
  }

  return `clamp(${minRem}rem, ${vwFactor}vw + ${remFactor}rem, ${maxRem}rem)`;
};

export const fluidSizeMobileToTablet = (
  minSize: number,
  maxSize: number
): string => {
  return fluidSize(minSize, maxSize, mobile, tablet);
};

export const fluidSizeTabletToLaptop = (
  minSize: number,
  maxSize: number
): string => {
  return fluidSize(minSize, maxSize, tablet, laptop);
};

export const fluidSizeTabletToDesktop = (
  minSize: number,
  maxSize: number
): string => {
  return fluidSize(minSize, maxSize, tablet, desktop);
};

export const fluidSizeLaptopToDesktop = (
  minSize: number,
  maxSize: number
): string => {
  return fluidSize(minSize, maxSize, laptop, desktop);
};

export const fluidSizeMobileToLaptop = (
  minSize: number,
  maxSize: number
): string => {
  return fluidSize(minSize, maxSize, mobile, laptop);
};

export const fluidSizeAllDevice = (
  cssProperty: CSSProperty,
  values: [number, number, number, number] // [mobile,tablet,laptop,desktop]
) => {
  const [mobilePx, tabletPx, laptopPx, desktopPx] = values;

  return `
    ${cssProperty}: ${fluidSizeMobileToTablet(mobilePx, tabletPx)};

    @media ${device.up.tablet} {
      ${cssProperty}: ${fluidSizeTabletToLaptop(tabletPx, laptopPx)};
    }

    @media ${device.up.laptop} {
      ${cssProperty}: ${fluidSizeLaptopToDesktop(laptopPx, desktopPx)};
    }
  `;
};

export const logAxiosError = (
  error: AxiosError<{
    error: string;
  }>
) => {
  if (error.response) {
    const { status, data } = error.response;
    console.error(data.error, status);
  } else if (error.request) {
    console.error(`No response received`, StatusCode.Error);
  } else {
    console.error(`Request set up error`, StatusCode.Error);
  }
};
