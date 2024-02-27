import { ReactComponent as BookmarkSVG } from '../../assets/icon-nav-bookmark.svg';
import { ReactComponent as HomeSVG } from '../../assets/icon-nav-home.svg';
import { ReactComponent as MovieSVG } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as TVSeriesSVG } from '../../assets/icon-nav-tv-series.svg';
import {
  PageNavContainer,
  StyledAppTitle,
  StyledImageTextContainer,
  StyledLink,
  StyledLogoSVG,
  StyledNav,
  StyledProfilePic
} from './nav-bar.styles';

const NavBar = () => {
  return (
    <StyledNav>
      <StyledImageTextContainer>
        <StyledLogoSVG />
        <StyledAppTitle>Entertainment</StyledAppTitle>
      </StyledImageTextContainer>
      <PageNavContainer>
        <StyledLink to='/'>
          <HomeSVG />
          <p>Home</p>
        </StyledLink>
        <StyledLink to='/movies'>
          <MovieSVG />
          <p>Movies</p>
        </StyledLink>
        <StyledLink to='/tvseries'>
          <TVSeriesSVG />
          <p>TV Series</p>
        </StyledLink>
        <StyledLink to='/bookmarked'>
          <BookmarkSVG />
          <p>Bookmarked</p>
        </StyledLink>
      </PageNavContainer>
      <StyledImageTextContainer>
        <StyledProfilePic />
        <p>Profile</p>
      </StyledImageTextContainer>
    </StyledNav>
  );
};

export default NavBar;
