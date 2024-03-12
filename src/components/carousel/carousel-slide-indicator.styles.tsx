import { pxToRem } from '@/utils/functions';
import styled from 'styled-components';

export const StyledIndicator = styled.div<{
  $isCurentIndex: boolean;
}>`
  background-color: ${({ $isCurentIndex, theme }) =>
    $isCurentIndex ? theme.color.accentButtonBg : theme.color.slideIndicatorBg};
  border-radius: 999rem;
  height: 100%;
  width: 100%;
`;

export const StyledCarouselItem = styled.div<{ $slidesPerView: number }>`
  flex: 0 0 ${({ $slidesPerView }) => 100 / $slidesPerView}%;
  height: ${pxToRem(4)};
  padding-right: ${pxToRem(3)};
`;

export const StyledIndicators = styled.div`
  display: flex;
`;

export const StyledViewport = styled.div`
  overflow: hidden;
`;

export const StyledSlideIndicator = styled.div`
  width: ${pxToRem(112)};
`;
