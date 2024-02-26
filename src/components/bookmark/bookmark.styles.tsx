import styled from 'styled-components';

import { ReactComponent as BookmarkSVG } from '../../assets/icon-bookmark-full.svg';
import { pxToRem } from '../../utils/functions';

export const StyledButton = styled.button`
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.primary.button};
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  width: ${pxToRem(32)};
`;

export const StyledBookmarkSVG = styled(BookmarkSVG)`
  height: ${pxToRem(14)};

  path {
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.secondary.main};
    stroke-width: 2;
  }
`;
