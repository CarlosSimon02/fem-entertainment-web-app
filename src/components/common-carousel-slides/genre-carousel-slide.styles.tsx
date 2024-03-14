import { ReactComponent as ArrowRightSVG } from '@/assets/icon-arrow-right.svg';
import { fontWeights } from '@/styles/sizes';
import {
  fluidSizeLaptopToDesktop,
  fluidSizeTabletToDesktop,
  pxToRem
} from '@/utils/functions';
import styled from 'styled-components';

export const StyledArrowRightSVG = styled(ArrowRightSVG)`
  height: ${pxToRem(30)};
  width: ${pxToRem(30)};

  & path {
    fill: ${({ theme }) => theme.color.bodyText};
  }
`;

export const StyledTitle = styled.span`
  color: ${({ theme }) => theme.color.bodyText};
  font-size: ${fluidSizeTabletToDesktop(16, 20)};
  font-weight: ${fontWeights.semiBold};
  text-align: left;
`;

export const StyledDetails = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: ${pxToRem(30)};
  justify-content: space-between;
`;

export const StyledPoster = styled.div<{ $imageUrl: string }>`
  aspect-ratio: 320 / 404;
  background-image: ${({ $imageUrl }) =>
    $imageUrl ? `url('${$imageUrl}')` : null};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${fluidSizeLaptopToDesktop(10, 12)};
  width: 100%;
`;

export const StyledPosterGrid = styled.div`
  display: grid;
  gap: ${pxToRem(5)};
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  &::before {
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 10%, 0%),
      hsl(0, 0%, 10%)
    );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.outlineBoxShallowBg};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: ${fluidSizeLaptopToDesktop(10, 12)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(5)};
  height: 100%;
  padding: ${fluidSizeLaptopToDesktop(24, 30)};
  width: 100%;
`;
