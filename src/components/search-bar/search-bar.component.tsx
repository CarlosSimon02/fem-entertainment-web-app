import {
  StyledContainer,
  StyledSearchInput,
  StyledSearchSVG
} from './search-bar.styles';

const SearchBar = () => {
  return (
    <StyledContainer>
      <StyledSearchSVG />
      <StyledSearchInput placeholder='Search for movies or TV series' />
    </StyledContainer>
  );
};

export default SearchBar;
