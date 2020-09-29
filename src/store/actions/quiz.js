import { getQuizes, getQuizById } from '../../services/QuizServices'
import {
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZ_SUCCESS,
  QUIZ_SET_STATE,
  QUIZ_SET_FINISHED,
  QUIZ_SET_NEXT_QUESTION,
  QUIZ_RETRY
} from './actionTypes'

export const fetchQuizById = quizId => async (dispatch) => {
  dispatch({ type: FETCH_QUIZES_START })

  try {
    const quiz = await getQuizById(quizId)
    dispatch({ type: FETCH_QUIZ_SUCCESS, quiz })
  } catch (e) {
    console.log(e)
    dispatch({ type: FETCH_QUIZES_ERROR, e })
  }
}

export const fetchQuizes = () => async (dispatch) => {
  dispatch({ type: FETCH_QUIZES_START })

  try {
    const response = await getQuizes()

    const quizes = []
    Object.keys(response).forEach((key, index) => {
      quizes.push({
        id: key,
        name: `Тест №${index + 1}`
      })
    })

    dispatch({ type: FETCH_QUIZES_SUCCESS, quizes })
  } catch (e) {
    console.log(e)
    dispatch({ type: FETCH_QUIZES_ERROR, e })
  }
}

export const quizRetry = () => dispatch => {
  dispatch({ type: QUIZ_RETRY })
}

export const quizAnswerClick = answerId => (dispatch, getState) => {
  const quiz = getState().quiz.quiz
  const results = getState().quiz.results
  const activeQuestion = getState().quiz.activeQuestion
  const question = quiz[activeQuestion]
  const isQuizFinished = activeQuestion + 1 === quiz.length

  const nextStepTimeout = () => {
    const timeout = setTimeout(() => {
      if (isQuizFinished) {
        dispatch({ type: QUIZ_SET_FINISHED, isFinished: true })
      } else {
        dispatch({
          type: QUIZ_SET_NEXT_QUESTION,
          activeQuestion: activeQuestion + 1
        })
      }

      clearTimeout(timeout)
    }, 3000)
  }

  if (question.rightAnswerId === answerId) {
    dispatch({
      type: QUIZ_SET_STATE,
      results: { ...results, [activeQuestion]: 'success' },
      answerState: { [answerId]: 'success' }
    })

    nextStepTimeout()
  } else {
    const rightAnswer = quiz[activeQuestion].rightAnswerId

    dispatch({
      type: QUIZ_SET_STATE,
      results: { ...results, [activeQuestion]: 'error' },
      answerState: { [answerId]: 'error', [rightAnswer]: 'success' }
    })

    nextStepTimeout()
  }
}
