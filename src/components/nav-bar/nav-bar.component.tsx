import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
      <Link to='/tvseries'>TV Series</Link>
      <Link to='/bookmarked'>Bookmarked</Link>
    </nav>
  );
};

export default NavBar;
