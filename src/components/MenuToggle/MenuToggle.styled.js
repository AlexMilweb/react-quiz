import styled, { css } from 'styled-components';

export const MenuToggle = styled.div`
  position: fixed;
  z-index: 100;
  top: 40px;
  left: 40px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s;

  ${props =>
    props.isOpen &&
    css`
      transform: translateX(280px);
    `}
`;

export const Icon = styled.svg`
  width: 100% !important;
  height: 100%;
  color: white;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
