import { EmblaOptionsType } from 'embla-carousel';

import Carousel from './carousel/carousel.component';
import { StyeldBGImage, StyledWrapper } from './latest-media-view.styles';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const LatestMediaView = () => {
  return (
    <StyledWrapper>
      <StyeldBGImage>
        <Carousel slides={SLIDES} options={OPTIONS} />
      </StyeldBGImage>
    </StyledWrapper>
  );
};

export default LatestMediaView;
