import { ReactComponent as LogoSVG } from '@/assets/logo.svg';
import { SpacerSectionStyle } from '@/styles/mixins';
import { fluidSizeAllDevice } from '@/utils/functions';
import styled from 'styled-components';

export const StyledLogoSVG = styled(LogoSVG)`
  ${fluidSizeAllDevice('width', [116, 140, 165, 199])}
`;

export const StyledAlignWrapper = styled.div`
  flex: 1;
`;

export const StyledHeader = styled.header`
  ${SpacerSectionStyle};

  display: flex;
  align-items: center;

  ${fluidSizeAllDevice('padding-block', [6, 8, 12, 14])}
`;

export const StyledStickyWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.bodyBg};
  position: sticky;
  top: 0;
  z-index: 2;
`;
