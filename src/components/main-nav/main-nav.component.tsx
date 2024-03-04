import { StyledNavLink, StyledWrapper } from './main-nav.styles';

const MainNav = () => {
  return (
    <StyledWrapper>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='/movies'>Movies</StyledNavLink>
      <StyledNavLink to='/tvseries'>TV Series</StyledNavLink>
      <StyledNavLink to='/bookmarked'>Bookmarked</StyledNavLink>
    </StyledWrapper>
  );
};

export default MainNav;
