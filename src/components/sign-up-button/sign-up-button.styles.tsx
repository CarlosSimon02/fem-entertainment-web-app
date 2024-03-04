import { fontWeights } from '@/styles/sizes';
import { fluidSizeLaptopToDesktop, pxToRem } from '@/utils/functions';
import styled from 'styled-components';

export const StyledAccentButton = styled.button`
  background-color: ${({ theme }) => theme.color.accentButtonBg};
  border-radius: ${pxToRem(8)};
  border-style: none;
  color: ${({ theme }) => theme.color.buttonFg};
  cursor: pointer;
  flex-shrink: 0;
  font-size: ${fluidSizeLaptopToDesktop(14, 18)};
  font-weight: ${fontWeights.semiBold};
  padding-block: ${pxToRem(14)};
  padding-inline: ${pxToRem(24)};
`;
