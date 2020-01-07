import React, { useState } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import { Quiz, Title, Wrapper } from './Quiz.styled';

export default () => {
  let [quiz, setQuiz] = useState([
    {
      answers: [
        { text: 'Вопрос 1' },
        { text: 'Вопрос 2' },
        { text: 'Вопрос 3' },
        { text: 'Вопрос 4' }
      ]
    }
  ]);

  return (
    <Quiz>
      <Wrapper>
        <Title>Ответьте на все вопросы</Title>
        <ActiveQuiz answers={quiz[0].answers} />
      </Wrapper>
    </Quiz>
  );
};
