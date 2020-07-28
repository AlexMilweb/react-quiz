import React, { useState, useEffect } from 'react'
import api from '../../api'
import { QuizList, Title, Wrapper, ListItem, Link, PreloaderStyled } from './QuizList.styled'

export default () => {
  const [quizes, setQuizes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/quizes.json')

        const quizes = []
        Object.keys(response.data).forEach((key, index) => {
          quizes.push({
            id: key,
            name: `Тест №${index + 1}`
          })
        })
        setQuizes(quizes)
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  const renderQuizes = () => {
    return quizes.map(({ id, name }) => {
      return (
        <ListItem key={id}>
          <Link to={`/quiz/${id}`}>
            {name}
          </Link>
        </ListItem>
      )
    })
  }

  return (
    <QuizList>
      <Wrapper>
        <Title>Список тестов</Title>
        {loading
          ?
            <PreloaderStyled />
            :
            <ul>
              {renderQuizes()}
            </ul>
        }
      </Wrapper>
    </QuizList>
  )
}
