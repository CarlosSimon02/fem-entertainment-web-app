import styled from 'styled-components';

import { ReactComponent as SearchSVG } from '../../assets/icon-search.svg';
import { fluidSizeXsToSm, pxToRem } from '../../utils/functions';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${fluidSizeXsToSm(16, 24)};
  width: 100%;
`;

export const StyledSearchInput = styled.input.attrs({ type: 'search' })`
  background-color: transparent;
  border: none;
  border-bottom: ${pxToRem(1)} solid transparent;
  box-sizing: content-box;
  caret-color: ${({ theme }) => theme.colors.accent.main};
  color: inherit;
  font-size: ${fluidSizeXsToSm(16, 24)};
  padding-bottom: ${fluidSizeXsToSm(12, 16)};
  width: 100%;

  &:focus-visible {
    border-bottom: ${pxToRem(1)} solid
      ${({ theme }) => theme.colors.secondary.sub};
    outline: none;
  }

  &::placeholder {
    color: inherit;
    opacity: 50%;
  }
`;

export const StyledSearchSVG = styled(SearchSVG)`
  height: ${fluidSizeXsToSm(24, 32)};
  width: ${fluidSizeXsToSm(24, 32)};
`;
