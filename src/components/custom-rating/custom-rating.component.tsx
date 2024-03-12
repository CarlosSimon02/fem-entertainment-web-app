import theme from '@/styles/theme';

import { StyledRating } from './custom-rating.styles';

type CustomRatingProps = {
  value: number;
  max: number;
  className?: string;
};

const CustomStar = (
  <path d='M9 0L12.1158 4.7114L17.5595 6.21885L14.0416 10.6381L14.2901 16.2812L9 14.301L3.70993 16.2812L3.95845 10.6381L0.440492 6.21885L5.88415 4.7114L9 0Z' />
);

const CustomRating = ({ value, max, className }: CustomRatingProps) => {
  return (
    <StyledRating
      className={className}
      value={(value * 5) / max}
      halfFillMode='svg'
      itemStyles={{
        itemShapes: CustomStar,
        activeFillColor: theme.dark.color.activeRatingStar,
        inactiveFillColor: theme.dark.color.paragraphText
      }}
      readOnly
    />
  );
};

export default CustomRating;
