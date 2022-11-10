import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContent, Nav, Link } from './Navi.styled';
const Header = () => {
  return (
    <>
      <HeaderContent>
        <Nav className="example">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </HeaderContent>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;
