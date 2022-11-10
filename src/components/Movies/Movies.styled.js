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
export const Button = styled.button`
  align-items: center;
  appearance: none;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #53000086 0 -3px 0 inset;
  box-sizing: border-box;
  color: HoneyDew;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;

  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding: 5px;

  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  margin-left: 20px;
  font-size: 11px;
  background-color: darkblue;

  :focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #53000086 0 -3px 0 inset;
  }

  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #53000086 0 -3px 0 inset;
    transform: translateY(-2px);
    background-color: darkblue;
  }

  :active {
    box-shadow: #53000086 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const Form = styled.form`
  margin-top: 5px;
`;
export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 20%;
  border: 0;
  font-family: inherit;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  background: lavender;
  box-shadow: inset 0 -1px 0 rgba($dark, 0.3);
  color: $dark;
  transition: all 0.15s ease;

  :hover {
    background: rgba($dark, 0.04);
    box-shadow: inset 0 -1px 0 rgba($dark, 0.5);
  }

  :focus {
    background: rgba($dark, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 $primary;
  }
`;
