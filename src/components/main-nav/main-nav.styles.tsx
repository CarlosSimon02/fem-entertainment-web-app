import { fluidSizeLaptopToDesktop, pxToRem } from '@/utils/functions';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.navBarLinkText};
  padding-block: ${fluidSizeLaptopToDesktop(12, 16)};
  padding-inline: ${fluidSizeLaptopToDesktop(16, 24)};
  border-radius: ${pxToRem(8)};
  font-size: ${fluidSizeLaptopToDesktop(14, 18)};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.color.navBarLinkTextSelected};
    background-color: ${({ theme }) => theme.color.navBarLinkBgSelected};
  }
`;

export const StyledWrapper = styled.nav`
  border: ${pxToRem(3)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  background-color: ${({ theme }) => theme.color.outlineBoxDeepBg};
  border-radius: ${fluidSizeLaptopToDesktop(10, 12)};
  display: flex;
  padding-block: ${fluidSizeLaptopToDesktop(8, 10)};
  padding-inline: ${fluidSizeLaptopToDesktop(8, 10)};
`;
