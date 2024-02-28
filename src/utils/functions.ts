import { AxiosError } from 'axios';

import { breakpoints } from '../styles/sizes';
import { StatusCode } from './types.d';

const BASE_FONT_SIZE = 16;
const { xs, sm, md } = breakpoints.up;

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

export const fluidSizeXsToSm = (minSize: number, maxSize: number): string => {
  return fluidSize(minSize, maxSize, xs, sm);
};

export const fluidSizeSmToMd = (minSize: number, maxSize: number): string => {
  return fluidSize(minSize, maxSize, sm, md);
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
