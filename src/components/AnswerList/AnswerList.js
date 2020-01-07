import React from 'react';
import { AnswerList, Answer } from './AnswerList.styled';

export default ({ answers }) => (
  <AnswerList>
    {answers.map((answer, index) => (
      <Answer key={index}>{answer.text}</Answer>
    ))}
  </AnswerList>
);
