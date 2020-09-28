import { getQuizes } from '../../services/QuizServices'
import { FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR} from './actionTypes'

export const fetchQuizes = () => async (dispatch) => {
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
    dispatch({ type: FETCH_QUIZES_ERROR, e })
  }
}
