import { forwardRef } from 'react';

const CarouselItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role='group'
      aria-roledescription='slide'
      className={className}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
