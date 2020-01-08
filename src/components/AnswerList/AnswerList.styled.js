import styled, { css, keyframes } from 'styled-components';

const blinkGreen = keyframes`
  0% {
    background-color: transparent;
  }

  25% {
    background-color: rgba(161, 240, 69, 0.7);
  }

  50% {
    background-color: transparent;
  }

  75% {
    background-color: rgba(161, 240, 69, 0.7);
  }

  100% {
    background-color: transparent;
  }
`;

const blinkRed = keyframes`
  0% {
    background-color: transparent;
  }

  25% {
    background-color: rgba(240, 87, 108, 0.7);
  }

  50% {
    background-color: transparent;
  }

  75% {
    background-color: rgba(240, 87, 108, 0.7);
  }

  100% {
    background-color: transparent;
  }
`;

export const AnswerList = styled.ul`
  padding-top: 20px;
  list-style: none;
`;

export const Answer = styled.li`
  border: 1px solid white;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  ${props =>
    props.isSuccess &&
    css`
      background-color: rgba(161, 240, 69, 0.7);
      border-color: rgba(161, 240, 69, 0.7);
      animation-name: ${blinkGreen};
      animation-duration: 3s;

      &:hover {
        background-color: rgba(161, 240, 69, 0.7);
      }
    `}

  ${props =>
    props.isError &&
    css`
      background-color: rgba(240, 87, 108, 0.7);
      border-color: rgba(240, 87, 108, 0.7);
      animation-name: ${blinkRed};
      animation-duration: 3s;

      &:hover {
        background-color: rgba(240, 87, 108, 0.7);
      }
    `}
`;
