import { ReactComponent as CogSVG } from '@/assets/icon-cog.svg';
import { ReactComponent as SunSVG } from '@/assets/icon-sun.svg';
import { fluidSizeLaptopToDesktop } from '@/utils/functions';
import styled, { css } from 'styled-components';

const IconStyle = css`
  width: ${fluidSizeLaptopToDesktop(24, 34)};

  & path {
    stroke: ${({ theme }) => theme.color.buttonFg};
  }
`;

export const StyledSunSVG = styled(SunSVG)`
  ${IconStyle}
`;

export const StyledCogSVG = styled(CogSVG)`
  ${IconStyle}
`;

export const StyledSettingsWrapper = styled.div`
  display: flex;
  gap: ${fluidSizeLaptopToDesktop(8, 12)};
`;

export const StyledLinkButton = styled.button`
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  padding: 0;
`;

export const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${fluidSizeLaptopToDesktop(14, 24)};
  justify-content: end;
`;
