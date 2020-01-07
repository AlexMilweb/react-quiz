import styled from 'styled-components';

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
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
