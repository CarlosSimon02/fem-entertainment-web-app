import {
  StyledArrowRightSVG,
  StyledButton,
  StyledDetails,
  StyledPoster,
  StyledPosterGrid,
  StyledTitle
} from './genre-carousel-slide.styles';

export type GenreCarouselSlideInfo = {
  id: number;
  name: string;
  posterPaths: [string, string, string, string];
};

type GenreCarouselSlideProps = {
  info: GenreCarouselSlideInfo;
};

const GenreCarouselSlide = ({ info }: GenreCarouselSlideProps) => {
  const { id, name, posterPaths } = info;

  return (
    <StyledButton>
      <StyledPosterGrid>
        {posterPaths.map((posterPath, index) => {
          return (
            <StyledPoster
              key={index}
              $imageUrl={`https://image.tmdb.org/t/p/w200${posterPath}`}
            />
          );
        })}
      </StyledPosterGrid>
      <StyledDetails>
        <StyledTitle>{name}</StyledTitle>
        <StyledArrowRightSVG />
      </StyledDetails>
    </StyledButton>
  );
};

export default GenreCarouselSlide;
