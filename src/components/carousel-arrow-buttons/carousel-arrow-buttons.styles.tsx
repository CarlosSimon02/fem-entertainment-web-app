import { ReactComponent as ArrowLeftSVG } from '@/assets/icon-arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '@/assets/icon-arrow-right.svg';
import { pxToRem } from '@/utils/functions';
import styled from 'styled-components';

export const StyledArrowLeftSVG = styled(ArrowLeftSVG)`
  height: ${pxToRem(24)};
  width: ${pxToRem(24)};
`;

export const StyledArrowRightSVG = styled(ArrowRightSVG)`
  height: ${pxToRem(24)};
  width: ${pxToRem(24)};
`;

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.color.outlineBoxDeepBg};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: ${pxToRem(6)};
  cursor: pointer;
  display: flex;
  height: ${pxToRem(44)};
  justify-content: center;
  width: ${pxToRem(44)};
`;
