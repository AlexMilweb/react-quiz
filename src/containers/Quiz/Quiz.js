import React, { useState } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import { Quiz, Title, Wrapper } from './Quiz.styled';

export default () => {
  let [quiz, setQuiz] = useState([
    {
      id: 1,
      question: 'Столица Молдовы?',
      rightAnswerId: 3,
      answers: [
        { text: 'Москва', id: 1 },
        { text: 'Будапешт', id: 2 },
        { text: 'Кишинев', id: 3 },
        { text: 'Бухарест', id: 4 }
      ]
    },
    {
      id: 2,
      question: 'Река протекающая через Тирасполь?',
      rightAnswerId: 2,
      answers: [
        { text: 'Днепр', id: 1 },
        { text: 'Днестр', id: 2 },
        { text: 'Дунай', id: 3 },
        { text: 'Волга', id: 4 }
      ]
    }
  ]);
  let [activeQuestion, setActiveQuestion] = useState(0);

  const onAnswerClickHandler = answerId => {
    setActiveQuestion(activeQuestion + 1);
  };

  return (
    <Quiz>
      <Wrapper>
        <Title>Ответьте на все вопросы</Title>
        <ActiveQuiz
          answers={quiz[activeQuestion].answers}
          question={quiz[activeQuestion].question}
          onAnswerClick={onAnswerClickHandler}
          quizLength={quiz.length}
          answerNumber={activeQuestion + 1}
        />
      </Wrapper>
    </Quiz>
  );
};
