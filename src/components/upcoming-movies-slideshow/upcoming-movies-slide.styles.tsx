import { ReactComponent as ArrowRightSVG } from '@/assets/icon-arrow-right.svg';
import { ReactComponent as BookmarkSVG } from '@/assets/icon-bookmark.svg';
import { ReactComponent as PlaySVG } from '@/assets/icon-play.svg';
import { AccentButtonStyle } from '@/styles/mixins';
import { device, fontWeights } from '@/styles/sizes';
import {
  fluidSizeAllDevice,
  fluidSizeLaptopToDesktop,
  pxToRem
} from '@/utils/functions';
import styled, { css } from 'styled-components';

const IconSizeStyle = css`
  height: ${fluidSizeLaptopToDesktop(16, 19)};
  width: ${fluidSizeLaptopToDesktop(16, 19)};
`;

const OutlineIconStyle = css`
  & path {
    stroke: ${({ theme }) => theme.color.buttonFg};
  }
`;

export const StyledReleaseDate = styled.span`
  font-weight: ${fontWeights.bold};
`;

export const StyledTitle = styled.span`
  font-weight: ${fontWeights.bold};

  ${fluidSizeAllDevice('font-size', [24, 28, 30, 38])}
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.color.paragraphText};
  max-width: ${pxToRem(960)};
  font-weight: ${fontWeights.medium};

  ${fluidSizeAllDevice('font-size', [16, 16, 16, 18])};
`;

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(4)};
`;

export const StyledPlaySVG = styled(PlaySVG)`
  ${IconSizeStyle}

  & path {
    fill: ${({ theme }) => theme.color.buttonFg};
  }
`;

export const StyledArrowRightSVG = styled(ArrowRightSVG)`
  ${IconSizeStyle}
  ${OutlineIconStyle}
`;

export const StyledBookmarkSVG = styled(BookmarkSVG)`
  ${IconSizeStyle}
  ${OutlineIconStyle}
`;

export const StyledAccentButton = styled.button`
  ${AccentButtonStyle}
`;

export const StyledOutlineButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.color.outlineBoxDeepBg};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: ${pxToRem(8)};
  color: ${({ theme }) => theme.color.buttonFg};
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  font-size: ${fluidSizeLaptopToDesktop(14, 18)};
  font-weight: ${fontWeights.semiBold};
  gap: ${pxToRem(9)};
  padding-block: ${fluidSizeLaptopToDesktop(12, 14)};
  padding-inline: ${pxToRem(24)};
`;

export const StyledOutlineIconButton = styled(StyledOutlineButton)`
  aspect-ratio: 1 / 1;
  justify-content: center;
  padding: ${fluidSizeLaptopToDesktop(12, 14)};
`;

export const StyledSubControls = styled.div`
  display: flex;
  gap: ${pxToRem(10)};
  justify-content: center;
`;

export const StyledControls = styled.div`
  display: flex;
  gap: ${pxToRem(20)};

  @media ${device.down.tablet} {
    flex-direction: column;
    max-width: ${pxToRem(390)};
    width: 100%;
  }
`;

export const StyledBackground = styled.div<{ $imageUrl?: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    to bottom,
    hsl(0, 0%, 8%, 0%),
    hsl(0, 0%, 8%, 70%),
    hsl(0, 0%, 8%)
  );
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  padding-inline: ${pxToRem(24)};
  padding-bottom: ${pxToRem(16)};

  ${fluidSizeAllDevice('gap', [20, 24, 24, 30])}

  @media ${device.up.tablet} {
    padding-bottom: ${fluidSizeLaptopToDesktop(104, 126)};
  }

  &::before {
    background-color: ${({ theme }) => theme.color.outlineBoxShallowBg};
    background-image: ${({ $imageUrl }) =>
      $imageUrl ? `url('${$imageUrl}')` : null};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: ' ';
    height: 100%;
    left: 0;
    opacity: 70%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;
