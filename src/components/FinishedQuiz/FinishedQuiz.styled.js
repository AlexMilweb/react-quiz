import styled from 'styled-components';

export const FinishedQuiz = styled.div`
  padding: 20px;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  min-height: 300px;
`;

export const IconTimes = styled.svg`
  width: 20px !important;
  height: 20px;
  margin-bottom: -2px;
  margin-left: 3px;
  color: rgba(240, 87, 108, 0.7);
`;

export const IconCheck = styled.svg`
  margin-left: 6px;
  color: rgba(161, 240, 69, 0.7);
`;

export const QuestionList = styled.ul`
  margin-bottom: 25px;
`;

export const Question = styled.li`
  margin-bottom: 3px;
  font-size: 18px;
`;

export const Results = styled.p`
  margin-bottom: 15px;
`;
