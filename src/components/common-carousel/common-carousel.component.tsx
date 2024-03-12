import { useEffect, useState } from 'react';

import useWinWidths from '@/hooks/useWinWidths.hooks';
import { logAxiosError } from '@/utils/functions';
import axios, { AxiosError } from 'axios';

import {
  CarouselNext,
  CarouselPrevious
} from '../carousel/carousel-arrow-buttons.component';
import CarouselSlideIndicator from '../carousel/carousel-slide-indicator.component';
import GenreCarouselSlide, {
  GenreCarouselSlideInfo
} from '../common-carousel-slides/genre-carousel-slide.component';
import MediaCarouselSlide, {
  MediaCarouselSlideInfo
} from '../common-carousel-slides/media-carousel-slide.component';
import {
  StyledCarousel,
  StyledCarouselContent,
  StyledControls,
  StyledGenreCarouselItem,
  StyledHeader,
  StyledMediaCarouselItem,
  StyledTitle
} from './common-carousel.styles';

type CarouselSlideInfo = MediaCarouselSlideInfo | GenreCarouselSlideInfo;

type CommonCarouselProps = {
  title: string;
  url: string;
  type?: 'genre' | 'media';
};

const CommonCarousel = ({
  title,
  url,
  type = 'media'
}: CommonCarouselProps) => {
  const { isMinTablet } = useWinWidths();
  const [listItems, setMediaItems] = useState<CarouselSlideInfo[]>([]);

  useEffect(() => {
    async function getMediaItems() {
      try {
        const response = await axios.get(url);
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
  }, [url]);

  return (
    <StyledCarousel opts={{ slidesToScroll: 'auto' }}>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledControls>
          <CarouselPrevious />
          <CarouselSlideIndicator />
          <CarouselNext />
        </StyledControls>
      </StyledHeader>
      <StyledCarouselContent>
        {listItems.map((listItem) => {
          if ('media' === type) {
            return (
              <StyledMediaCarouselItem key={listItem.id}>
                <MediaCarouselSlide info={listItem as MediaCarouselSlideInfo} />
              </StyledMediaCarouselItem>
            );
          } else {
            return (
              <StyledGenreCarouselItem key={listItem.id}>
                <GenreCarouselSlide info={listItem as GenreCarouselSlideInfo} />
              </StyledGenreCarouselItem>
            );
          }
        })}
      </StyledCarouselContent>
    </StyledCarousel>
  );
};

export default CommonCarousel;
