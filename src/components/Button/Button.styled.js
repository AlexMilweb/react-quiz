import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: ${props => (props.type === 'primary' ? 'white' : 'black')};
  transition: background-color 0.3s;
  background-color: ${props => {
    switch (props.type) {
      case 'primary':
        return 'rgba(40, 132, 246, 1)';
      case 'success':
        return 'rgba(161, 240, 69, 1)';
      case 'error':
        return 'rgba(240, 87, 108, 1)';
      default:
        return 'white';
    }
  }};
  border: ${props => (props.type ? 'none' : '1px solid #ccc')}

  &:active {
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    background-color: ${props => {
      switch (props.type) {
        case 'primary':
          return 'rgba(74, 152, 247, 1)';
        case 'success':
          return 'rgba(193, 255, 120, 1)';
        case 'error':
          return 'rgba(240, 120, 136, 1)';
        default:
          return 'rgba(255, 255, 255, 0.7)';
      }
    }};
  }
`;
