import React from 'react';
import { AnswerList, Answer } from './AnswerList.styled';

export default ({ answers, onAnswerClick }) => (
  <AnswerList>
    {answers.map((answer, index) => (
      <Answer key={index} onClick={() => onAnswerClick(answer.id)}>
        {answer.text}
      </Answer>
    ))}
  </AnswerList>
);
