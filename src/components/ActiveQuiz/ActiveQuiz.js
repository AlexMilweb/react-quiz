import React from 'react';
import AnswerList from '../AnswerList/AnswerList';
import { ActiveQuiz, Question, Header, Step } from './ActiveQuiz.styled';

export default ({ answers, question, onAnswerClick, quizLength, answerNumber, answerState }) => (
  <ActiveQuiz>
    <Header>
      <Question>
        <strong>{answerNumber}.</strong>&nbsp;
        {question}
      </Question>
      <Step>
        {answerNumber} из {quizLength}
      </Step>
    </Header>
    <AnswerList answers={answers} onAnswerClick={onAnswerClick} answerState={answerState} />
  </ActiveQuiz>
);
