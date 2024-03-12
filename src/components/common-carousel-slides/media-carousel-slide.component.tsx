import { abbreviateNumber } from '@/utils/functions';

import CustomRating from '../custom-rating/custom-rating.component';
import {
  StyledButton,
  StyledCalendarSVG,
  StyledDetailBox,
  StyledDetails,
  StyledPoster,
  StyledTitle
} from './media-carousel-slide.styles';

export type MediaCarouselSlideInfo = {
  id: number;
  title: string;
  posterPath: string;
  releaseYear: string;
  voteAverage: number;
  voteCount: number;
};

type MediaCarouselSlideProps = {
  info: MediaCarouselSlideInfo;
};

const MediaCarouselSlide = ({ info }: MediaCarouselSlideProps) => {
  const { id, title, posterPath, releaseYear, voteAverage, voteCount } = info;

  return (
    <StyledButton>
      <StyledPoster
        $imageUrl={`https://image.tmdb.org/t/p/w500${posterPath}`}
      />
      <StyledTitle>{title}</StyledTitle>
      <StyledDetails>
        <StyledDetailBox>
          <StyledCalendarSVG />
          {releaseYear}
        </StyledDetailBox>
        <StyledDetailBox>
          <CustomRating value={voteAverage} max={10} />
          {abbreviateNumber(voteCount)}
        </StyledDetailBox>
      </StyledDetails>
    </StyledButton>
  );
};

export default MediaCarouselSlide;
