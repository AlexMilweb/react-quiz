import React, { useEffect, useState } from 'react'
import api from '../../api'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import { Quiz, Title, Wrapper, PreloaderStyled } from './Quiz.styled'

export default ({ match }) => {
  let [quiz, setQuiz] = useState([])
  let [activeQuestion, setActiveQuestion] = useState(0)
  let [answerState, setAnswerState] = useState(null)
  let [isFinished, setIsFinished] = useState(false)
  let [results, setResults] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/quizes/${match.params.id}.json`)
        setQuiz(response.data)
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  const isQuizFinished = () => {
    return activeQuestion + 1 === quiz.length
  }

  const nextStepTimeout = () => {
    const timeout = setTimeout(() => {
      if (isQuizFinished()) {
        setIsFinished(true)
      } else {
        setActiveQuestion(activeQuestion + 1)
        setAnswerState(null)
      }

      clearTimeout(timeout)
    }, 3000)
  }

  const onAnswerClickHandler = answerId => {
    const question = quiz[activeQuestion]

    if (question.rightAnswerId === answerId) {
      setResults({ ...results, [activeQuestion]: 'success' })
      setAnswerState({ [answerId]: 'success' })

      nextStepTimeout()
    } else {
      setResults({ ...results, [activeQuestion]: 'error' })

      const rightAnswer = quiz[activeQuestion].rightAnswerId
      setAnswerState({ [answerId]: 'error', [rightAnswer]: 'success' })

      nextStepTimeout()
    }
  }

  const retryHandler = () => {
    setIsFinished(false)
    setActiveQuestion(0)
    setResults({})
    setAnswerState(null)
  }

  return (
    <Quiz>
      <Wrapper>
        <Title>Ответьте на все вопросы</Title>
        {loading
          ?
            (
              <PreloaderStyled />
            ) : isFinished ? (
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
            )
        }
      </Wrapper>
    </Quiz>
  )
}
