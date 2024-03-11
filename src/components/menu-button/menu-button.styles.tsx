import { ReactComponent as HamburgerSVG } from '@/assets/icon-hamburger.svg';
import { pxToRem } from '@/utils/functions';
import styled from 'styled-components';

export const StyledHamburgerSVG = styled(HamburgerSVG)`
  width: ${pxToRem(24)};

  & path {
    stroke: ${({ theme }) => theme.color.buttonFg};
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.outlineBoxShallowBg};
  border: ${pxToRem(3)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: ${pxToRem(6)};
  cursor: pointer;
  display: flex;
  padding: ${pxToRem(12)};
`;
