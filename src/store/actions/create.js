import { postQuiz } from '../../services/QuizServices'
import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from '../actions/actionTypes'

export const createQuizQuestion = item => ({
  type: CREATE_QUIZ_QUESTION,
  item
})

export const finishCreateQuiz = () => async (dispatch, getState) => {
  await postQuiz( getState().create.quiz )
  dispatch({ type: RESET_QUIZ_CREATION })
}
