import CTA from '@/components/cta/cta.component';
import Footer from '@/components/footer/footer.component';
import Header from '@/components/header/header.component';
import { Outlet } from 'react-router-dom';

import { StyledBodySection, StyledWrapper } from './main.styles';

const Main = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledBodySection>
        <Outlet />
      </StyledBodySection>
      <CTA />
      <Footer />
    </StyledWrapper>
  );
};

export default Main;
