import SamplePoster from '@/assets/sample-poster.jpg';

import {
  StyledBox,
  StyledDetailsWrapper,
  StyledPoster,
  StyledTitle,
  StyledWrapper
} from './slide.styles';

type SlideProps = {
  className?: string;
};

const Slide = ({ className }: SlideProps) => {
  return (
    <StyledWrapper className={className}>
      <StyledBox className='latest-media-slide'>
        <StyledPoster $imageUrl={SamplePoster} />
        <StyledDetailsWrapper>
          <StyledTitle>The Devil Princess</StyledTitle>
        </StyledDetailsWrapper>
      </StyledBox>
    </StyledWrapper>
  );
};

export default Slide;
