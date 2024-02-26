import { ReactComponent as MovieSVG } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as TVSeriesSVG } from '../../assets/icon-nav-tv-series.svg';
import { MediaListItemInfo, MediaType } from '../../utils/types.d';
import {
  StyledBGImage,
  StyledBlankImageSVG,
  StyledBookmark,
  StyledContainer,
  StyledDetailsContainer,
  StyledInfos,
  StyledTitle
} from './media-card.styles';

export enum MediaCardType {
  Big,
  Medium
}

type MediaCardProps = {
  info: MediaListItemInfo;
  type?: MediaCardType;
};

const MediaCard = ({
  info: { mediaType, title, releaseYear, rating, imagePath },
  type = MediaCardType.Big
}: MediaCardProps) => {
  return (
    <StyledContainer $isBigCard={type === MediaCardType.Big}>
      <StyledBGImage $image={imagePath}>
        {!imagePath && <StyledBlankImageSVG />}
      </StyledBGImage>
      <StyledBookmark />
      <StyledDetailsContainer>
        <StyledInfos>
          <span>{releaseYear}</span>
          <span>•</span>
          <span>
            {MediaType.Movie === mediaType ? <MovieSVG /> : <TVSeriesSVG />}
            {mediaType}
          </span>
          <span>•</span>
          <span>{`${rating}`}</span>
        </StyledInfos>
        <StyledTitle>{title}</StyledTitle>
      </StyledDetailsContainer>
    </StyledContainer>
  );
};

export default MediaCard;
