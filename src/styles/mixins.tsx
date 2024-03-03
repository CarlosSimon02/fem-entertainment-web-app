import { fluidSizeAllDevice, pxToRem } from '@/utils/functions';
import { css } from 'styled-components';

import { breakpoints } from './sizes';

export const SpacerSectionStyle = css`
  max-width: ${pxToRem(breakpoints.up.desktop)};
  margin-inline: auto;
  width: 100%;

  ${fluidSizeAllDevice('padding-inline', [16, 32, 80, 162])}
`;
