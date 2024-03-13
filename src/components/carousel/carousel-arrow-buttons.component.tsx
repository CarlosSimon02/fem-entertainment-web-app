import { forwardRef } from 'react';

import {
  StyledArrowLeftSVG,
  StyledArrowRightSVG,
  StyledButton
} from './carousel-arrow-buttons.styles';
import useCarousel from './useCarousel.hook';

export const CarouselPrevious = forwardRef<
  HTMLButtonElement,
  React.HtmlHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <StyledButton
      ref={ref}
      className={className}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <StyledArrowLeftSVG />
      <span className='sr-only'>Previous slide</span>
    </StyledButton>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = forwardRef<
  HTMLButtonElement,
  React.HtmlHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <StyledButton
      ref={ref}
      className={className}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <StyledArrowRightSVG />
      <span className='sr-only'>Next slide</span>
    </StyledButton>
  );
});
CarouselNext.displayName = 'CarouselNext';
