import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import {
  FinishedQuiz,
  QuestionList,
  Question,
  Results,
  IconTimes,
  IconCheck
} from './FinishedQuiz.styled';

export default ({ results, quiz, onRetry }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total++;
    }

    return total;
  }, 0);

  return (
    <FinishedQuiz>
      <QuestionList>
        {quiz.map((quizItem, index) => (
          <Question key={index}>
            <strong>{index + 1}</strong>.&nbsp;
            {quizItem.question}
            {results[index] === 'success' ? (
              <IconCheck as={props => <FontAwesomeIcon icon={faCheck} {...props} />} />
            ) : (
              <IconTimes as={props => <FontAwesomeIcon icon={faTimes} {...props} />} />
            )}
          </Question>
        ))}
      </QuestionList>
      <Results>
        Правильно {successCount} из {quiz.length}
      </Results>
      <Button onClick={onRetry} type='primary' style={{ marginRight: '15px' }}>
        Повторить
      </Button>
      <Link to='/' onClick={onRetry}>
        <Button type='success'>Перейти в список тестов</Button>
      </Link>
    </FinishedQuiz>
  );
};
