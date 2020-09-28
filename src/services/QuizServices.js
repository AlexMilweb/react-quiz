import api from '../api'

export const getQuizes = () => api.get('/quizes.json').then(({ data }) => data)
