import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchQuizes } from '../../store/actions/quiz'
import { QuizList, Title, Wrapper, ListItem, Link, PreloaderStyled } from './QuizList.styled'

const mapStateToProps = ({ quiz }) => ({
  quizes: quiz.quizes,
  loading: quiz.loading
})

const mapDispatchToProps = dispatch => bindActionCreators({ fetchQuizes }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(({ quizes, loading, fetchQuizes }) => {

  useEffect(() => {
    fetchQuizes()
  }, [fetchQuizes])

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
        {loading && quizes.length === 0
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
})
