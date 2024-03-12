import useWinWidths from '@/hooks/useWinWidths.hooks';

import {
  StyledAccentButton,
  StyledArrowRightSVG,
  StyledBackground,
  StyledBookmarkSVG,
  StyledControls,
  StyledDescription,
  StyledDetails,
  StyledOutlineButton,
  StyledOutlineIconButton,
  StyledPlaySVG,
  StyledReleaseDate,
  StyledSubControls,
  StyledTitle
} from './upcoming-movies-slide.styles';

export type UpcomingMoviesInfo = {
  id: number;
  title?: string;
  overview: string;
  backdropPath: string;
  releaseDate: string;
};

type UpcomingMovieSlideProps = {
  info: UpcomingMoviesInfo;
};

const UpcomingMovieSlide = ({ info }: UpcomingMovieSlideProps) => {
  const { title, overview, backdropPath, releaseDate } = info;

  const { isMinTablet } = useWinWidths();

  return (
    <StyledBackground
      $imageUrl={`https://image.tmdb.org/t/p/original${backdropPath}`}
    >
      <StyledDetails>
        <StyledTitle>{title}</StyledTitle>
        {isMinTablet && (
          <StyledDescription>
            <StyledReleaseDate>{`${releaseDate} • `}</StyledReleaseDate>
            {overview}
          </StyledDescription>
        )}
      </StyledDetails>
      <StyledControls>
        <StyledAccentButton>
          <StyledPlaySVG />
          <p>Watch Trailer</p>
        </StyledAccentButton>
        <StyledSubControls>
          <StyledOutlineButton>
            <p>View Details</p>
            <StyledArrowRightSVG />
          </StyledOutlineButton>
          <StyledOutlineIconButton>
            <StyledBookmarkSVG />
            <p className='sr-only'>View Details</p>
          </StyledOutlineIconButton>
        </StyledSubControls>
      </StyledControls>
    </StyledBackground>
  );
};

export default UpcomingMovieSlide;
