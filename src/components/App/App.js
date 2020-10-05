import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { autoLogin } from '../../store/actions/auth'
import Layout from '../../hoc/Layout/Layout'
import Quiz from '../../containers/Quiz/Quiz'
import QuizList from '../../containers/QuizList/QuizList'
import Auth from '../../containers/Auth/Auth'
import QuizCreator from '../../containers/QuizCreator/QuizCreator'
import Logout from '../../components/Logout/Logout'

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
})

const mapDispatchToProps = dispatch => bindActionCreators({ autoLogin }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(({ isAuthenticated, autoLogin }) => {
  useEffect(() => {
    autoLogin()
  }, [autoLogin])

  let routes = (
    <Switch>
      <Route path='/' component={QuizList} exact />
      <Route path='/auth' component={Auth} />
      <Route path='/quiz/:id' component={Quiz} />
      <Redirect to='/' />
    </Switch>
  )

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/quiz-creator' component={QuizCreator} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/logout' component={Logout} />
        <Route path='/' component={QuizList} exact />
        <Redirect to='/' />
      </Switch>
    )
  }

  return (
    <Layout>
      { routes }
    </Layout>
  )
}))
