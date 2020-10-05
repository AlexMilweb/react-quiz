import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { logout } from '../../store/actions/auth'

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logout
  },
  dispatch
)

export default connect(null, mapDispatchToProps)(({ logout }) => {
  useEffect(() => {
    logout()
  }, [logout])

  return <Redirect to={'/'} />
})
