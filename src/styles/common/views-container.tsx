import styled from 'styled-components';

import { fluidSizeXsToSm } from '../../utils/functions';

const ViewsContainer = styled.div`
  display: grid;
  gap: ${fluidSizeXsToSm(24, 40)};
  width: 100%;
`;

export default ViewsContainer;
