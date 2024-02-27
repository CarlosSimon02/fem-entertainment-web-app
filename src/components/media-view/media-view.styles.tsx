import styled, { css } from 'styled-components';

import { device } from '../../styles/sizes';
import {
  fluidSizeSmToMd,
  fluidSizeXsToSm,
  pxToRem
} from '../../utils/functions';

export const StyledItemsContainer = styled.div`
  gap: ${fluidSizeXsToSm(15, 30)};

  @media ${device.up.md} {
    gap: ${fluidSizeSmToMd(30, 40)};
  }
`;

const HorizontalViewStyle = css`
  margin-right: ${pxToRem(-36)};

  ${StyledItemsContainer} {
    display: flex;
    overflow-x: scroll;

    & > * {
      flex-shrink: 0;
    }
  }
`;

const VerticalViewStyle = css`
  ${StyledItemsContainer} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${pxToRem(200)}, 1fr));

    & > * {
      width: 100%;
    }

    @media ${device.up.md} {
      grid-template-columns: repeat(auto-fit, minmax(${pxToRem(280)}, 1fr));
    }
  }
`;

export const StyledContainer = styled.div<{ $isHorizontal?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(26)};
  overflow: hidden;

  ${({ $isHorizontal }) =>
    $isHorizontal ? HorizontalViewStyle : VerticalViewStyle}
`;

export const StyledTitle = styled.h1`
  font-size: ${fluidSizeXsToSm(20, 32)};
  font-weight: inherit;
`;
