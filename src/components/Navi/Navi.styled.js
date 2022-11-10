import styled from 'styled-components';
const { NavLink } = require('react-router-dom');
export const HeaderContent = styled.header`
  padding: 10px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    black 0px 30px 60px -30px, silver 0px -2px 6px 0px inset;
`;
export const Nav = styled.nav`
  padding: 10px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  border-radius: 5px;
  padding: 5px 20px;
  &.active {
    color: HoneyDew;
    background-color: darkblue;
  }
`;
