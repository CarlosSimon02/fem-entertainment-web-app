import { SpacerSectionStyle } from '@/styles/mixins';
import styled from 'styled-components';

export const StyledBodySection = styled.section`
  ${SpacerSectionStyle}
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
`;

export const StyledWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  min-height: 100vh;
  width: 100vw;
`;
