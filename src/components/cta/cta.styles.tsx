import CTAImage from '@/assets/cta-background-image.png';
import { SpacerSectionStyle } from '@/styles/mixins';
import { device, fontWeights } from '@/styles/sizes';
import {
  fluidSizeAllDevice,
  fluidSizeLaptopToDesktop,
  fluidSizeMobileToTablet,
  pxToRem
} from '@/utils/functions';
import styled from 'styled-components';

export const StyledTitle = styled.span`
  font-weight: ${fontWeights.bold};

  ${fluidSizeAllDevice('font-size', [24, 24, 28, 48])}
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.color.paragraphText};
  max-width: ${fluidSizeLaptopToDesktop(600, 1000)};

  ${fluidSizeAllDevice('font-size', [14, 14, 16, 18])};

  @media ${device.down.tablet} {
    max-width: ${pxToRem(600)};
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${fluidSizeMobileToTablet(10, 14)};
`;

export const StyledBox = styled.div`
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: ${pxToRem(12)};
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    to right,
    hsl(0, 0%, 6%),
    hsla(0, 17%, 7%, 97.47%),
    hsla(0, 43%, 9%, 90.96%),
    hsla(0, 100%, 45%, 30%)
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(60)};

  ${fluidSizeAllDevice('padding-block', [50, 70, 80, 100])};
  ${fluidSizeAllDevice('padding-inline', [30, 45, 60, 80])};

  @media ${device.down.tablet} {
    background: no-repeat
      linear-gradient(
        to bottom,
        hsl(0, 0%, 6%),
        hsla(0, 17%, 7%, 97.47%),
        hsla(0, 43%, 9%, 90.96%),
        hsla(0, 100%, 45%, 30%)
      );
    flex-direction: column;
    gap: ${pxToRem(50)};
    text-align: center;
  }

  &::before {
    background-image: url(${CTAImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: ' ';
    height: 150%;
    left: 0;
    position: absolute;
    top: -25%;
    width: 100%;
    z-index: -1;
  }
`;

export const StyledWrapper = styled.div`
  ${SpacerSectionStyle}

  ${fluidSizeAllDevice('margin-block-start', [30, 30, 40, 50])};
  ${fluidSizeAllDevice('margin-block-end', [80, 100, 120, 150])};
`;
