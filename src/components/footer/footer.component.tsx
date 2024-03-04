import {
  StyledFacebookSVG,
  StyledFooter,
  StyledFooterBottom,
  StyledLink,
  StyledLinkedinSVG,
  StyledLinksColumn,
  StyledLinksColumnTitle,
  StyledLinksGrid,
  StyledLinksWrapper,
  StyledPoliciesWrapper,
  StyledSocialA,
  StyledSocialLinksWrapper,
  StyledTwitterSVG,
  StyledVerticalSeparator,
  StyledWrapper
} from './footer.styles';

const Footer = () => {
  return (
    <StyledWrapper>
      <StyledFooter>
        <StyledLinksGrid>
          <StyledLinksColumn>
            <StyledLinksColumnTitle>Home</StyledLinksColumnTitle>
            <StyledLinksWrapper>
              <StyledLink to='/'>New Release</StyledLink>
              <StyledLink to='/'>Categories</StyledLink>
              <StyledLink to='/'>Trending</StyledLink>
              <StyledLink to='/'>Popular</StyledLink>
            </StyledLinksWrapper>
          </StyledLinksColumn>
          <StyledLinksColumn>
            <StyledLinksColumnTitle>Movies</StyledLinksColumnTitle>
            <StyledLinksWrapper>
              <StyledLink to='/'>Genres</StyledLink>
              <StyledLink to='/'>Trending</StyledLink>
              <StyledLink to='/'>New Release</StyledLink>
              <StyledLink to='/'>Popular</StyledLink>
            </StyledLinksWrapper>
          </StyledLinksColumn>
          <StyledLinksColumn>
            <StyledLinksColumnTitle>TV Series</StyledLinksColumnTitle>
            <StyledLinksWrapper>
              <StyledLink to='/'>Genres</StyledLink>
              <StyledLink to='/'>Trending</StyledLink>
              <StyledLink to='/'>New Release</StyledLink>
              <StyledLink to='/'>Popular</StyledLink>
            </StyledLinksWrapper>
          </StyledLinksColumn>
          <StyledLinksColumn>
            <StyledLinksColumnTitle>Support</StyledLinksColumnTitle>
            <StyledLinksWrapper>
              <StyledLink to='/'>Contact Me</StyledLink>
            </StyledLinksWrapper>
          </StyledLinksColumn>
          <StyledLinksColumn>
            <StyledLinksColumnTitle>Connect With Me</StyledLinksColumnTitle>
            <StyledSocialLinksWrapper>
              <StyledSocialA>
                <StyledFacebookSVG />
              </StyledSocialA>
              <StyledSocialA>
                <StyledTwitterSVG />
              </StyledSocialA>
              <StyledSocialA>
                <StyledLinkedinSVG />
              </StyledSocialA>
            </StyledSocialLinksWrapper>
          </StyledLinksColumn>
        </StyledLinksGrid>
        <StyledFooterBottom>
          <p>@2023 streamvibe, All Rights Reserved</p>
          <StyledPoliciesWrapper>
            <StyledLink to='/'>Terms of Use</StyledLink>
            <StyledVerticalSeparator />
            <StyledLink to='/'>Privacy Policy</StyledLink>
            <StyledVerticalSeparator />
            <StyledLink to='/'>Cookie Policy</StyledLink>
          </StyledPoliciesWrapper>
        </StyledFooterBottom>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Footer;
