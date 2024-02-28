import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import SROnlyStyle from '../../styles/common/sr-only-style';
import { device, fontWeights } from '../../styles/sizes';
import {
  fluidSizeSmToMd,
  fluidSizeXsToSm,
  pxToRem
} from '../../utils/functions';

export const StyledNav = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.sub};
  display: flex;
  gap: ${pxToRem(30)};
  justify-content: space-between;
  overflow: scroll;
  padding-block: ${fluidSizeXsToSm(16, 20)};
  padding-inline: var(--main-page-margin-inline);
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 10;

  @media ${device.up.md} {
    flex-direction: column;
    gap: ${pxToRem(70)};
    height: 100vh;
    padding-block: var(--main-page-margin-block);
    position: fixed;
    width: fit-content;
  }

  & > * {
    flex-shrink: 0;
  }
`;

export const PageNavContainer = styled.div`
  display: flex;
  gap: ${fluidSizeXsToSm(24, 32)};

  @media ${device.up.md} {
    flex: 1 1;
    flex-direction: column;
  }

  @media ${device.up.lg} {
    width: 100%;
  }
`;

export const StyledLogoSVG = styled(LogoSVG)`
  height: ${fluidSizeXsToSm(20, 25.6)};
  width: ${fluidSizeXsToSm(25, 32)};
`;

const IconBesideTextStyle = css`
  align-items: center;
  display: flex;
  gap: ${pxToRem(20)};

  @media ${device.down.lg} {
    p {
      ${SROnlyStyle}
    }
  }
`;

export const StyledLink = styled(Link)`
  ${IconBesideTextStyle}
  text-decoration: none;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.colors.secondary.sub};

  svg {
    height: ${fluidSizeXsToSm(16, 20)};
  }
`;

//just a temporary element for profile
export const StyledProfilePic = styled.div`
  aspect-ratio: 1 / 1;
  background-color: white;
  border-radius: 100%;
  width: ${fluidSizeXsToSm(24, 32)};

  @media ${device.up.md} {
    width: ${fluidSizeSmToMd(32, 40)};
  }
`;

export const StyledImageTextContainer = styled.div`
  ${IconBesideTextStyle}
  font-size: ${pxToRem(20)};
  font-weight: ${fontWeights.medium};

  @media ${device.up.lg} {
    width: 100%;
  }

  p {
    flex: 1;
  }
`;

export const StyledAppTitle = styled.p`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.accent.main};
  text-decoration-thickness: ${pxToRem(2)};
  text-underline-offset: ${pxToRem(5)};
`;
