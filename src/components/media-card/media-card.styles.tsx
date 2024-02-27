import styled, { css } from 'styled-components';

import { ReactComponent as BlankImageSVG } from '../../assets/icon-blank-image.svg';
import { fontWeights } from '../../styles/sizes';
import { fluidSizeXsToSm, pxToRem } from '../../utils/functions';
import Bookmark from '../bookmark/bookmark.component';

export const StyledBlankImageSVG = styled(BlankImageSVG)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;

  * {
    fill: ${({ theme }) => theme.colors.secondary.sub};
  }
`;

export const StyledBGImage = styled.div<{ $image?: string }>`
  background: ${({ theme }) => theme.colors.primary.sub}
    ${({ $image }) =>
      $image ? `url('https://image.tmdb.org/t/p/original${$image}')` : null}
    no-repeat center;
  background-color: ${({ theme }) => theme.colors.primary.sub};
  background-size: cover;
  position: relative;
`;

export const StyledDetailsContainer = styled.div`
  width: 100%;
`;

export const StyledInfos = styled.p`
  display: flex;
  font-size: ${fluidSizeXsToSm(12, 15)};
  gap: ${pxToRem(8)};
  opacity: 75%;

  & svg {
    margin-right: ${pxToRem(6)};
    width: ${pxToRem(10)};

    & path {
      fill: ${({ theme }) => theme.colors.secondary.main};
    }
  }
`;

export const StyledTitle = styled.h2`
  font-size: ${fluidSizeXsToSm(15, 24)};
  font-weight: ${fontWeights.medium};
  overflow: hidden;
  overflow-wrap: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BigCardStyle = css`
  border-radius: ${pxToRem(8)};
  overflow: hidden;

  ${StyledBGImage} {
    height: ${fluidSizeXsToSm(140, 230)};
    width: ${fluidSizeXsToSm(240, 470)};
  }

  ${StyledDetailsContainer} {
    background-image: linear-gradient(transparent, hsla(0, 0%, 0%, 75%));
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
    padding: ${fluidSizeXsToSm(16, 24)};
    position: absolute;
    width: 100%;
  }
`;

const MediumCardStyle = css`
  height: fit-content;
  width: ${fluidSizeXsToSm(280, 280)};

  ${StyledBGImage} {
    aspect-ratio: 280 / 174;
    border-radius: ${pxToRem(8)};
    margin-bottom: ${pxToRem(15)};
    width: 100%;
  }

  ${StyledDetailsContainer} {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
  }
`;

export const StyledContainer = styled.div<{ $isBigCard?: boolean }>`
  width: fit-content;
  height: fit-content;
  position: relative;

  ${({ $isBigCard }) => ($isBigCard ? BigCardStyle : MediumCardStyle)}
`;

export const StyledBookmark = styled(Bookmark)`
  position: absolute;
  right: ${fluidSizeXsToSm(8, 24)};
  top: ${fluidSizeXsToSm(8, 16)};
`;
