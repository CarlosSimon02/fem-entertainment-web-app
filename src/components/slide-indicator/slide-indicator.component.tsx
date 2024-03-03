import { useCallback, useEffect, useState } from 'react';

import { EmblaCarouselType } from 'embla-carousel';

import { StyledButton, StyledIndicators } from './slide-indicator.styles';

type SlideIndicatorProps = {
  emblaApi?: EmblaCarouselType;
  className?: string;
};

const SlideIndicator = ({ emblaApi, className }: SlideIndicatorProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const handleOnClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <StyledIndicators className={className}>
      {scrollSnaps.map((_, index) => (
        <StyledButton
          key={index}
          onClick={() => handleOnClick(index)}
          $isSelected={index === selectedIndex}
        />
      ))}
    </StyledIndicators>
  );
};

export default SlideIndicator;
