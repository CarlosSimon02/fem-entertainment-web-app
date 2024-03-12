import { useEffect } from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import {
  StyledCarouselItem,
  StyledIndicator,
  StyledIndicators,
  StyledSlideIndicator,
  StyledViewport
} from './carousel-slide-indicator.styles';
import useCarousel from './useCarousel.hook';

const SLIDES_PER_VIEW = 4;

const CarouselSlideIndicator = () => {
  const { prevSelectedIndex, selectedIndex, scrollSnaps } = useCarousel();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    watchDrag: false
  });

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    if (emblaApi.selectedScrollSnap() > selectedIndex) {
      emblaApi.scrollTo(selectedIndex);
    } else if (
      emblaApi.selectedScrollSnap() + SLIDES_PER_VIEW - 1 <
      selectedIndex
    ) {
      emblaApi.scrollTo(selectedIndex - SLIDES_PER_VIEW + 1);
    }
  }, [selectedIndex, emblaApi, prevSelectedIndex, scrollSnaps.length]);

  return (
    <StyledSlideIndicator>
      <StyledViewport ref={emblaRef}>
        <StyledIndicators>
          {scrollSnaps.map((_, index) => (
            <StyledCarouselItem key={index} $slidesPerView={SLIDES_PER_VIEW}>
              <StyledIndicator $isCurentIndex={index === selectedIndex} />
            </StyledCarouselItem>
          ))}
        </StyledIndicators>
      </StyledViewport>
    </StyledSlideIndicator>
  );
};

export default CarouselSlideIndicator;
