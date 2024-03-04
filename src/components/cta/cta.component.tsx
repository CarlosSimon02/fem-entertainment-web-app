import SignUpButton from '../sign-up-button/sign-up-button.component';
import {
  StyledBox,
  StyledDescription,
  StyledTextWrapper,
  StyledTitle,
  StyledWrapper
} from './cta.styles';

const CTA = () => {
  return (
    <StyledWrapper>
      <StyledBox>
        <StyledTextWrapper>
          <StyledTitle>Sign up now!</StyledTitle>
          <StyledDescription>
            Join now to bookmark and save your favorite movies and TV shows,
            ensuring you never miss a moment of entertainment!
          </StyledDescription>
        </StyledTextWrapper>
        <SignUpButton />
      </StyledBox>
    </StyledWrapper>
  );
};

export default CTA;
