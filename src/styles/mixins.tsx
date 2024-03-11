import {
  fluidSizeAllDevice,
  fluidSizeLaptopToDesktop,
  pxToRem
} from '@/utils/functions';
import { css } from 'styled-components';

import { breakpoints, fontWeights } from './sizes';

export const SpacerSectionStyle = css`
  max-width: ${pxToRem(breakpoints.up.desktop)};
  margin-inline: auto;
  width: 100%;

  ${fluidSizeAllDevice('padding-inline', [16, 32, 80, 162])}
`;

export const AccentButtonStyle = css`
  align-items: center;
  background-color: ${({ theme }) => theme.color.accentButtonBg};
  border-radius: ${pxToRem(8)};
  border-style: none;
  color: ${({ theme }) => theme.color.buttonFg};
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  font-size: ${fluidSizeLaptopToDesktop(14, 18)};
  font-weight: ${fontWeights.semiBold};
  gap: ${pxToRem(9)};
  justify-content: center;
  padding-block: ${fluidSizeLaptopToDesktop(12, 14)};
  padding-inline: ${pxToRem(24)};
`;
