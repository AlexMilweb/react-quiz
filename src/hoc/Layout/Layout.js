import React, { useState } from 'react'
import MenuToggle from '../../components/MenuToggle/MenuToggle'
import Drawer from '../../components/Drawer/Drawer'
import { GlobalStyles } from '../../globalStyles.styled'
import { Layout, Main } from './Layout.styled'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
})

export default connect(mapStateToProps)(({ children, isAuthenticated }) => {
  let [menu, setMenu] = useState(false)

  const toggleMenuHandler = () => {
    setMenu(!menu)
  }

  const menuCloseHandler = () => {
    setMenu(false)
  }

  return (
    <Layout>
      <GlobalStyles />
      <MenuToggle onToggle={toggleMenuHandler} isOpen={menu} />
      <Drawer
        isOpen={menu}
        onClose={menuCloseHandler}
        isAuthenticated={isAuthenticated}
      />
      <Main>{children}</Main>
    </Layout>
  )
})
