import styled from 'styled-components';
const { NavLink } = require('react-router-dom');
export const ListItem = styled.li`
  margin-bottom: 5px;
  color: darkblue;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: darkblue;
  :hover {
    color: CornflowerBlue;
  }
`;
