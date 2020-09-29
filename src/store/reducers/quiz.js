import {
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZ_SUCCESS,
  QUIZ_SET_STATE,
  QUIZ_SET_FINISHED,
  QUIZ_SET_NEXT_QUESTION,
  QUIZ_RETRY
} from '../actions/actionTypes'

const initialState = {
  quizes: [],
  loading: false,
  error: null,
  quiz: null,
  activeQuestion: 0,
  answerState: null,
  isFinished: false,
  results: {}
}

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        quizes: action.quizes,
        loading: false
      }
    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        quiz: action.quiz,
        loading: false
      }
    case QUIZ_SET_STATE:
      return {
        ...state,
        results: action.results,
        answerState: action.answerState
      }
    case QUIZ_SET_FINISHED:
      return {
        ...state,
        isFinished: action.isFinished
      }
    case QUIZ_SET_NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: action.activeQuestion,
        answerState: null,
      }
    case QUIZ_RETRY:
      return {
        ...state,
        isFinished: false,
        activeQuestion: 0,
        results: {},
        answerState: null
      }
    default:
      return state
  }
}
