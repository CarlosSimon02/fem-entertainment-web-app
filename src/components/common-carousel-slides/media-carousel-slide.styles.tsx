import { ReactComponent as CalendarSVG } from '@/assets/icon-calendar.svg';
import { fontWeights } from '@/styles/sizes';
import {
  fluidSizeAllDevice,
  fluidSizeLaptopToDesktop,
  fluidSizeTabletToDesktop,
  pxToRem
} from '@/utils/functions';
import styled from 'styled-components';

import CustomRating from '../custom-rating/custom-rating.component';

export const StyledCustomRating = styled(CustomRating)`
  width: ${fluidSizeLaptopToDesktop(75, 92)};
`;

export const StyledCalendarSVG = styled(CalendarSVG)`
  height: ${pxToRem(20)};
  width: ${pxToRem(20)};

  & path {
    fill: ${({ theme }) => theme.color.paragraphText};
  }
`;

export const StyledTitle = styled.span`
  color: ${({ theme }) => theme.color.bodyText};
  font-size: ${fluidSizeTabletToDesktop(16, 20)};
  font-weight: ${fontWeights.semiBold};
  text-align: left;
`;

export const StyledDetailBox = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.color.outlineBoxDeepBg};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: 999.99rem;
  color: ${({ theme }) => theme.color.paragraphText};
  display: flex;
  font-size: ${fluidSizeLaptopToDesktop(14, 16)};
  font-weight: ${fontWeights.medium};
  gap: ${pxToRem(5)};
  height: ${pxToRem(40)};
  justify-content: center;
  padding-block: ${pxToRem(6)};
  padding-inline: ${pxToRem(14)};
`;

export const StyledDetails = styled.div`
  align-items: end;
  display: flex;
  flex: 1;
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

export const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  background-color: ${({ theme }) => theme.color.outlineBoxShallowBg};
  display: flex;
  flex-direction: column;
  border-radius: ${fluidSizeLaptopToDesktop(10, 12)};

  ${fluidSizeAllDevice('padding', [12, 14, 16, 20])};
  ${fluidSizeAllDevice('gap', [12, 14, 16, 20])}
`;
