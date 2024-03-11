import { useEffect, useState } from 'react';

import useWinWidths from '@/hooks/useWinWidths.hooks';
import { logAxiosError } from '@/utils/functions';
import axios, { AxiosError } from 'axios';
import Autoplay from 'embla-carousel-autoplay';

import {
  CarouselNext,
  CarouselPrevious
} from '../carousel/carousel-arrow-buttons.component';
import CarouselSlideIndicator from '../carousel/carousel-slide-indicator.component';
import UpcomingMovieSlide, {
  UpcomingMoviesInfo
} from './upcoming-movies-slide.component';
import {
  StyledCarousel,
  StyledCarouselContent,
  StyledCarouselItem,
  StyledControls
} from './upcoming-movies-slideshow.styles';

const UpcomingMoviesSlideshow = () => {
  const { isMinTablet } = useWinWidths();
  const [listItems, setMediaItems] = useState<UpcomingMoviesInfo[]>([]);

  useEffect(() => {
    async function getMediaItems() {
      try {
        const response = await axios.get(
          '/.netlify/functions/fetchUpcomingMovies'
        );
        setMediaItems(response.data.listItems);
      } catch (error) {
        logAxiosError(
          error as AxiosError<{
            error: string;
          }>
        );
      }
    }

    getMediaItems();
  }, []);

  return (
    <StyledCarousel
      plugins={[Autoplay({ stopOnLastSnap: true, stopOnInteraction: true })]}
    >
      <StyledCarouselContent>
        {listItems.map((listItem) => {
          return (
            <StyledCarouselItem key={listItem.id}>
              <UpcomingMovieSlide info={listItem} />
            </StyledCarouselItem>
          );
        })}
      </StyledCarouselContent>
      {isMinTablet && (
        <StyledControls>
          <CarouselPrevious />
          <CarouselSlideIndicator />
          <CarouselNext />
        </StyledControls>
      )}
    </StyledCarousel>
  );
};

export default UpcomingMoviesSlideshow;
