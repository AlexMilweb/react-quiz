import React from 'react';
import { AnswerList, Answer } from './AnswerList.styled';

export default ({ answers, onAnswerClick, answerState }) => (
  <AnswerList>
    {answers.map((answer, index) => (
      <Answer
        key={index}
        onClick={() => onAnswerClick(answer.id)}
        isSuccess={answerState && answerState[answer.id] === 'success'}
        isError={answerState && answerState[answer.id] === 'error'}
      >
        {answer.text}
      </Answer>
    ))}
  </AnswerList>
);
