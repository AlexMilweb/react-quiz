import React from 'react';
import AnswerList from '../AnswerList/AnswerList';
import { ActiveQuiz, Question, Header, Step } from './ActiveQuiz.styled';

export default ({ answers }) => (
  <ActiveQuiz>
    <Header>
      <Question>
        <strong>4. </strong>Как дела?
      </Question>
      <Step>4 из 12</Step>
    </Header>
    <AnswerList answers={answers} />
  </ActiveQuiz>
);
