import { device } from '@/styles/sizes';
import { fluidSizeAllDevice, pxToRem } from '@/utils/functions';
import styled from 'styled-components';

export const StyledControlsWrapper = styled.div`
  display: flex;
  gap: ${pxToRem(20)};
`;

export const StyledWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(50)};

  ${fluidSizeAllDevice('margin-inline', [0, 0, 320, 500])}

  @media ${device.up.desktop} {
    margin-inline: initial;
  }
`;

export const StyledViewport = styled.div`
  align-items: stretch;
  display: flex;
  justify-content: stretch;
  width: 100%;
`;

export const StyledSlidesWrapper = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  width: 100%;
`;
