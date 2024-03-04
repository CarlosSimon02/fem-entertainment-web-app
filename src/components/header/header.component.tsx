import useWinWidths from '@/hooks/useWinWidths.hooks';
import { Link } from 'react-router-dom';

import Controls from '../controls/controls.component';
import MainNav from '../main-nav/main-nav.component';
import MenuButton from '../menu-button/menu-button.component';
import {
  StyledAlignWrapper,
  StyledHeader,
  StyledLogoSVG,
  StyledStickyWrapper
} from './header.styles';

const Header = () => {
  const { isMinTablet } = useWinWidths();

  return (
    <StyledStickyWrapper>
      <StyledHeader>
        <StyledAlignWrapper>
          <Link to='/'>
            <StyledLogoSVG />
          </Link>
        </StyledAlignWrapper>
        {isMinTablet ? (
          <>
            <MainNav />
            <StyledAlignWrapper>
              <Controls />
            </StyledAlignWrapper>
          </>
        ) : (
          <MenuButton />
        )}
      </StyledHeader>
    </StyledStickyWrapper>
  );
};

export default Header;
