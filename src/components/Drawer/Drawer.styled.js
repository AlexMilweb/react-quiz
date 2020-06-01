import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Drawer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  padding: 20px 10px;
  background-color: white;
  z-index: 90;
  transform: translateX(-300px);
  transition: transform 0.3s;

  ${props =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}
`;

export const LinkList = styled.ul``;

export const LinkWrapper = styled.li`
  margin-bottom: 15px;
`;

export const Link = styled(NavLink)`
  color: #363f54;
  font-size: 30px;
  text-decoration: none;
  background-color: white;
  position: relative;
  padding: 0 20px 10px 20px;
  transition: opacity 0.3s;

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;
