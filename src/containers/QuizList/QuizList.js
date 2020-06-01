import React from 'react';
import { QuizList, Title, Wrapper, ListItem, Link } from './QuizList.styled';

export default () => {
  const renderQuizes = () => {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <ListItem key={index}>
          <Link to={`/quiz/${quiz}`}>
            Тест {quiz}
          </Link>
        </ListItem>
      );
    });
  };

  return (
    <QuizList>
      <Wrapper>
        <Title>Список тестов</Title>
        <ul>
          {renderQuizes()}
        </ul>
      </Wrapper>
    </QuizList>
  )
}
