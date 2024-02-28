import { Outlet } from 'react-router-dom';

import NavBar from '../../components/nav-bar/nav-bar.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import {
  StyledContainer,
  StyledPageContainer,
  StyledSection
} from './main.styles';

const Main = () => {
  return (
    <StyledContainer>
      <NavBar />
      <StyledSection>
        <StyledPageContainer>
          <SearchBar />
          <Outlet />
        </StyledPageContainer>
      </StyledSection>
    </StyledContainer>
  );
};

export default Main;
