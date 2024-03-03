import { device } from '@/styles/sizes';
import { fluidSizeAllDevice, pxToRem } from '@/utils/functions';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  ${fluidSizeAllDevice('font-size', [16, 16, 20, 20])}
`;

export const StyledPoster = styled.div<{ $imageUrl: string }>`
  background-image: ${({ $imageUrl }) => `url('${$imageUrl}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 ${pxToRem(15)} ${pxToRem(20)} ${pxToRem(-5)} black;
  flex-shrink: 0;
  height: 40%;
  margin-top: -50px;
  width: 40%;

  @media (width >= 35em) {
    bottom: 20%;
    height: 120%;
    margin-top: 0;
    position: relative;
  }
`;

export const StyledDetailsWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  border: ${pxToRem(1)} solid ${({ theme }) => theme.color.outlineBoxBorder};
  background-color: ${({ theme }) => theme.color.outlineBoxDeepBg};
  border-radius: ${pxToRem(12)};
  box-shadow: 0 ${pxToRem(35)} ${pxToRem(50)} ${pxToRem(-25)} black;
  display: flex;
  gap: 4%;
  flex-direction: column;
  align-items: center;

  ${fluidSizeAllDevice('padding', [15, 20, 30, 30])}

  @media (width >= 35em) {
    align-items: start;
    flex-direction: row;
  }
`;

export const StyledWrapper = styled.div`
  aspect-ratio: 13 / 16;
  flex: 0 0;
  flex-basis: 100%;
  margin-inline: auto;
  max-width: ${pxToRem(400)};
  padding-inline: ${pxToRem(32)};
  padding-top: 6%;

  @media (width >= 35em) {
    aspect-ratio: 1170 / 730;
    max-width: ${pxToRem(664)};
  }

  @media ${device.up.tablet} {
    flex-basis: 80%;
    max-width: none;
    padding-inline: 0;
  }

  @media ${device.up.desktop} {
    flex-basis: 50%;
  }
`;
