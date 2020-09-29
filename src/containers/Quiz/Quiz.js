import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchQuizById, quizAnswerClick, quizRetry } from '../../store/actions/quiz'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import { Quiz, Title, Wrapper, PreloaderStyled } from './Quiz.styled'

const mapStateToProps = ({ quiz }) => ({
  quiz: quiz.quiz,
  activeQuestion: quiz.activeQuestion,
  answerState: quiz.answerState,
  isFinished: quiz.isFinished,
  results: quiz.results,
  loading: quiz.loading
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchQuizById,
    quizAnswerClick,
    quizRetry
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(({
  fetchQuizById,
  quizAnswerClick,
  quizRetry,
  match,
  quiz,
  activeQuestion,
  answerState,
  isFinished,
  results,
  loading
}) => {
  useEffect(() => {
    fetchQuizById(match.params.id)

    return () => quizRetry()
  }, [fetchQuizById, match.params.id, quizRetry])

  return (
    <Quiz>
      <Wrapper>
        <Title>Ответьте на все вопросы</Title>
        {loading || !quiz
          ?
            (
              <PreloaderStyled />
            ) : isFinished ? (
              <FinishedQuiz results={results} quiz={quiz} onRetry={quizRetry} />
            ) : (
              <ActiveQuiz
                answers={quiz[activeQuestion].answers}
                question={quiz[activeQuestion].question}
                onAnswerClick={quizAnswerClick}
                quizLength={quiz.length}
                answerNumber={activeQuestion + 1}
                answerState={answerState}
              />
            )
        }
      </Wrapper>
    </Quiz>
  )
})
