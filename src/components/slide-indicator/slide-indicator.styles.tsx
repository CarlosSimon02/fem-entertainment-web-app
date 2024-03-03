import { pxToRem } from '@/utils/functions';
import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $isSelected: boolean }>`
  cursor: pointer;
  height: ${pxToRem(10)};
  border: none;
  border-radius: 9999.99rem;

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          background-color: ${({ theme }) => theme.color.accentButtonBg};
          width: ${pxToRem(44)};
        `
      : css`
          background-color: ${({ theme }) => theme.color.slideIndicatorBg};
          flex: 1;
        `}
`;

export const StyledIndicators = styled.div`
  align-items: center;
  display: flex;
  gap: ${pxToRem(5)};
  justify-content: stretch;
  width: ${pxToRem(180)};
`;
