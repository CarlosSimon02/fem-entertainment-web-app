import SignUpButton from '../sign-up-button/sign-up-button.component';
import {
  StyledCogSVG,
  StyledLinkButton,
  StyledSettingsWrapper,
  StyledSunSVG,
  StyledWrapper
} from './controls.styles';

type ControlsProps = {
  className?: string;
};

const Controls = ({ className }: ControlsProps) => {
  return (
    <StyledWrapper className={className}>
      <StyledSettingsWrapper>
        <StyledLinkButton>
          <StyledSunSVG />
        </StyledLinkButton>
        <StyledLinkButton>
          <StyledCogSVG />
        </StyledLinkButton>
      </StyledSettingsWrapper>
      <SignUpButton />
    </StyledWrapper>
  );
};

export default Controls;
