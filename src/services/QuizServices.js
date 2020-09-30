import api from '../api'

export const getQuizes = () => api.get('/quizes.json').then(({ data }) => data)
export const getQuizById = id => api.get(`/quizes/${id}.json`).then(({ data }) => data)
export const postQuiz = quiz => api.post('/quizes.json', quiz)
