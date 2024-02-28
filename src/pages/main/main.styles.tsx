import styled from 'styled-components';

import { device } from '../../styles/sizes';
import { fluidSizeXsToSm, pxToRem } from '../../utils/functions';

export const StyledContainer = styled.div`
  --main-page-margin-inline: ${fluidSizeXsToSm(16, 25)};
  --main-page-margin-block: ${fluidSizeXsToSm(24, 32)};

  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${device.up.md} {
    flex-direction: row;
  }
`;

export const StyledSection = styled.section`
  --nav-bar-desktop-width: ${pxToRem(90)};

  flex: 1;
  padding-block: var(--main-page-margin-block);
  padding-inline: ${pxToRem(36)};

  @media ${device.up.md} {
    margin-left: var(--nav-bar-desktop-width);
  }

  @media ${device.up.lg} {
    --nav-bar-desktop-width: ${pxToRem(231.8)};
  }
`;

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${fluidSizeXsToSm(12, 16)};
  margin-inline: auto;
  max-width: ${pxToRem(1240)};
  width: 100%;
`;
