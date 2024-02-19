import { Outlet } from 'react-router-dom';

import NavBar from '../../components/nav-bar/nav-bar.component';

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Main;
