import { forwardRef } from 'react';

import { StyledWrapper } from './carousel-content.styles';
import useCarousel from './useCarousel.hook';

const CarouselContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();

  return (
    <StyledWrapper ref={carouselRef}>
      <div ref={ref} className={className} {...props} />
    </StyledWrapper>
  );
});
CarouselContent.displayName = 'CarouselContent';

export default CarouselContent;
