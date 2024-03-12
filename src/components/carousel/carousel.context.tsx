import { ReactNode, createContext } from 'react';

import useEmblaCarousel from 'embla-carousel-react/components/useEmblaCarousel';

import { CarouselProps } from './carousel.component';

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  prevSelectedIndex: number;
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
} & CarouselProps;

type CarouselProviderProps = {
  children?: ReactNode;
  value: CarouselContextProps;
};

export const CarouselContext = createContext<CarouselContextProps | null>(null);

export const CarouselProvider = ({
  value,
  children
}: CarouselProviderProps) => {
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};
