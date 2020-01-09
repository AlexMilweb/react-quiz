import React, { useState } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
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
  let [answerState, setAnswerState] = useState(null);
  let [isFinished, setIsFinished] = useState(false);
  let [results, setResults] = useState({});

  const isQuizFinished = () => {
    return activeQuestion + 1 === quiz.length;
  };

  const nextStepTimeout = () => {
    const timeout = setTimeout(() => {
      if (isQuizFinished()) {
        setIsFinished(true);
      } else {
        setActiveQuestion(activeQuestion + 1);
        setAnswerState(null);
      }

      clearTimeout(timeout);
    }, 3000);
  };

  const onAnswerClickHandler = answerId => {
    const question = quiz[activeQuestion];

    if (question.rightAnswerId === answerId) {
      setResults({ ...results, [activeQuestion]: 'success' });
      setAnswerState({ [answerId]: 'success' });

      nextStepTimeout();
    } else {
      setResults({ ...results, [activeQuestion]: 'error' });

      const rightAnswer = quiz[activeQuestion].rightAnswerId;
      setAnswerState({ [answerId]: 'error', [rightAnswer]: 'success' });

      nextStepTimeout();
    }
  };

  const retryHandler = () => {
    setIsFinished(false);
    setActiveQuestion(0);
    setResults({});
    setAnswerState(null);
  };

  return (
    <Quiz>
      <Wrapper>
        <Title>Ответьте на все вопросы</Title>
        {isFinished ? (
          <FinishedQuiz results={results} quiz={quiz} onRetry={retryHandler} />
        ) : (
          <ActiveQuiz
            answers={quiz[activeQuestion].answers}
            question={quiz[activeQuestion].question}
            onAnswerClick={onAnswerClickHandler}
            quizLength={quiz.length}
            answerNumber={activeQuestion + 1}
            answerState={answerState}
          />
        )}
      </Wrapper>
    </Quiz>
  );
};
