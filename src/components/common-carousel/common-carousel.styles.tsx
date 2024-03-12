import { fontWeights } from '@/styles/sizes';
import {
  fluidSizeAllDevice,
  fluidSizeLaptopToDesktop,
  fluidSizeTabletToLaptop,
  pxToRem
} from '@/utils/functions';
import styled from 'styled-components';

import { StyledButton } from '../carousel/carousel-arrow-buttons.styles';
import CarouselContent from '../carousel/carousel-content.component';
import CarouselItem from '../carousel/carousel-item.component';
import { StyledSlideIndicator } from '../carousel/carousel-slide-indicator.styles';
import { Carousel } from '../carousel/carousel.component';

export const StyledGenreCarouselItem = styled(CarouselItem)`
  flex: 0 0 20%;
  min-width: 0;
  padding-left: ${fluidSizeTabletToLaptop(16, 20)};
`;

export const StyledMediaCarouselItem = styled(CarouselItem)`
  flex: 0 0 25%;
  min-width: 0;
  padding-left: ${fluidSizeTabletToLaptop(16, 20)};
`;

export const StyledCarouselContent = styled(CarouselContent)`
  align-items: stretch;
  display: flex;
  margin-left: ${fluidSizeTabletToLaptop(-16, -20)};
`;

export const StyledTitle = styled.span`
  font-weight: ${fontWeights.bold};

  ${fluidSizeAllDevice('font-size', [24, 28, 30, 38])}
`;

export const StyledControls = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.color.outlineBoxDeepBg};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: ${fluidSizeLaptopToDesktop(10, 12)};
  display: flex;
  gap: ${fluidSizeLaptopToDesktop(12, 16)};
  padding: ${fluidSizeLaptopToDesktop(12, 16)};

  ${StyledButton} {
    background-color: ${({ theme }) => theme.color.outlineBoxShallowBg};
    padding: ${fluidSizeLaptopToDesktop(10, 14)};
  }

  ${StyledSlideIndicator} {
    width: ${pxToRem(82)};
  }
`;

export const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: column;

  ${fluidSizeAllDevice('gap', [20, 30, 40, 50])};
  ${fluidSizeAllDevice('margin-block-end', [50, 65, 80, 100])}
`;
