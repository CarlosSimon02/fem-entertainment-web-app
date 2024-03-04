import { ReactComponent as FacebookSVG } from '@/assets/icon-facebook.svg';
import { ReactComponent as LinkedinSVG } from '@/assets/icon-linkedin.svg';
import { ReactComponent as TwitterSVG } from '@/assets/icon-twitter.svg';
import { SpacerSectionStyle } from '@/styles/mixins';
import { fontWeights } from '@/styles/sizes';
import {
  fluidSizeAllDevice,
  fluidSizeLaptopToDesktop,
  pxToRem
} from '@/utils/functions';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledVerticalSeparator = styled.div`
  border-left: ${pxToRem(1)} solid ${({ theme }) => theme.color.separator};
  height: ${fluidSizeLaptopToDesktop(21, 27)};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.paragraphText};
  text-decoration: none;
`;

export const StyledPoliciesWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${fluidSizeLaptopToDesktop(16, 20)};
`;

export const StyledFooterBottom = styled.div`
  align-items: center;
  border-top: ${pxToRem(1)} solid ${({ theme }) => theme.color.separator};
  color: ${({ theme }) => theme.color.paragraphText};
  gap: ${pxToRem(20)} ${pxToRem(40)};
  display: flex;
  flex-wrap: wrap;
  font-size: ${fluidSizeLaptopToDesktop(14, 18)};
  justify-content: space-between;
  padding-top: ${fluidSizeLaptopToDesktop(20, 24)};

  ${StyledLink} {
    font-size: inherit;
  }
`;

const IconStyle = css`
  width: ${fluidSizeLaptopToDesktop(20, 24)};

  & path {
    fill: ${({ theme }) => theme.color.buttonFg};
  }
`;

export const StyledFacebookSVG = styled(FacebookSVG)`
  ${IconStyle}
`;

export const StyledTwitterSVG = styled(TwitterSVG)`
  ${IconStyle}
`;

export const StyledLinkedinSVG = styled(LinkedinSVG)`
  ${IconStyle}
`;

export const StyledSocialA = styled.a`
  align-items: center;
  background-color: ${({ theme }) => theme.color.outlineBoxShallowBg};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  border-radius: ${fluidSizeLaptopToDesktop(6, 8)};
  cursor: pointer;
  display: flex;
  height: ${fluidSizeLaptopToDesktop(44, 56)};
  justify-content: center;
  width: ${fluidSizeLaptopToDesktop(44, 56)};
`;

export const StyledSocialLinksWrapper = styled.div`
  display: flex;
  gap: ${fluidSizeLaptopToDesktop(10, 14)};

  ${StyledLink} {
    ${fluidSizeAllDevice('font-size', [14, 14, 16, 18])};
  }
`;

export const StyledLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${fluidSizeAllDevice('gap', [8, 10, 10, 14])};
`;

export const StyledLinksColumnTitle = styled.span`
  font-weight: ${fontWeights.semiBold};

  ${fluidSizeAllDevice('font-size', [16, 18, 18, 20])};
`;

export const StyledLinksColumn = styled.div`
  display: flex;
  flex-direction: column;

  ${fluidSizeAllDevice('gap', [16, 20, 20, 24])};
`;

export const StyledLinksGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${pxToRem(160)}, 1fr));
  column-gap: ${pxToRem(20)};

  ${fluidSizeAllDevice('row-gap', [30, 50, 50, 70])};
`;

export const StyledFooter = styled.footer`
  ${SpacerSectionStyle};
  display: flex;
  flex-direction: column;

  ${fluidSizeAllDevice('padding-block-start', [50, 60, 80, 100])}
  ${fluidSizeAllDevice('padding-block-end', [20, 30, 40, 50])}
  ${fluidSizeAllDevice('gap', [50, 80, 80, 100])}
`;

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.footerBg};
`;
