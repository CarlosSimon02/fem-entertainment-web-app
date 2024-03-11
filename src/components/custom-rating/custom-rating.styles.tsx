import { pxToRem } from '@/utils/functions';
import { Rating } from '@smastrom/react-rating';
import styled from 'styled-components';

export const StyledRating = styled(Rating)`
  width: ${pxToRem(98)};
`;
