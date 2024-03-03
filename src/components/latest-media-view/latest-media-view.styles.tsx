import SampleBG from '@/assets/sample-background.jpg';
import { SpacerSectionStyle } from '@/styles/mixins';
import { device } from '@/styles/sizes';
import { fluidSizeAllDevice } from '@/utils/functions';
import styled from 'styled-components';

export const StyeldBGImage = styled.div`
  align-items: center;
  background: no-repeat
    linear-gradient(
      to bottom,
      hsl(0, 0%, 8%),
      hsla(0, 0%, 8%, 71.03%),
      hsla(0, 0%, 8%, 71.03%),
      hsl(0, 0%, 8%)
    );
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    background-image: url(${SampleBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: ' ';
    height: 100%;
    left: 0;
    opacity: 40%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const StyledWrapper = styled.div`
  ${fluidSizeAllDevice('height', [600, 600, 600, 700])}

  @media ${device.up.desktop} {
    ${SpacerSectionStyle}
  }
`;
