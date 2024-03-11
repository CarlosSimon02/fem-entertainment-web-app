import {
  fluidSizeAllDevice,
  fluidSizeLaptopToDesktop,
  pxToRem
} from '@/utils/functions';
import styled from 'styled-components';

import CarouselContent from '../carousel/carousel-content.component';
import CarouselItem from '../carousel/carousel-item.component';
import { Carousel } from '../carousel/carousel.component';

export const StyledCarouselItem = styled(CarouselItem)`
  flex: 0 0 101%;
  height: 100%;
`;

export const StyledCarouselContent = styled(CarouselContent)`
  display: flex;
  height: 100%;
`;

export const StyledControls = styled.div`
  align-items: center;
  bottom: ${fluidSizeLaptopToDesktop(16, 20)};
  display: flex;
  justify-content: space-between;
  padding-inline: ${fluidSizeLaptopToDesktop(40, 50)};
  pointer-events: none;
  position: absolute;
  width: 100%;

  & > * {
    pointer-events: auto;
  }
`;

export const StyledCarousel = styled(Carousel)`
  border-radius: ${pxToRem(12)};
  margin-block-start: ${fluidSizeLaptopToDesktop(40, 50)};
  position: relative;

  ${fluidSizeAllDevice('margin-block-end', [80, 90, 100, 180])}
  ${fluidSizeAllDevice('height', [468, 550, 709, 835])};
`;
