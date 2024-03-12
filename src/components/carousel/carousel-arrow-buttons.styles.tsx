import { ReactComponent as ArrowLeftSVG } from '@/assets/icon-arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '@/assets/icon-arrow-right.svg';
import { fluidSizeLaptopToDesktop, pxToRem } from '@/utils/functions';
import styled, { css } from 'styled-components';

const IconStyle = css`
  height: ${fluidSizeLaptopToDesktop(24, 28)};
  width: ${fluidSizeLaptopToDesktop(24, 28)};

  & path {
    stroke: ${({ theme }) => theme.color.buttonFg};
  }
`;

export const StyledArrowRightSVG = styled(ArrowRightSVG)`
  ${IconStyle}
`;

export const StyledArrowLeftSVG = styled(ArrowLeftSVG)`
  ${IconStyle}
`;

export const StyledButton = styled.button`
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.color.outlineBoxDeepBg};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: ${pxToRem(8)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: ${fluidSizeLaptopToDesktop(12, 14)};
`;
