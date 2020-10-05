import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import { Drawer, LinkList, LinkWrapper, Link } from './Drawer.styled'

export default ({ isOpen, onClose, isAuthenticated }) => {
  const clickHandler = () => {
    onClose()
  }

  let links = [
    {
      to: '/',
      label: 'Список',
      exact: true,
    }
  ]

  if (isAuthenticated) {
    links.push({
      to: '/quiz-creator',
      label: 'Создать тест',
      exact: false,
    })
    links.push({
      to: '/logout',
      label: 'Выйти',
      exact: false,
    })
  } else {
    links.push({
      to: '/auth',
      label: 'Авторизация',
      exact: false,
    })
  }

  return (
    <>
      <Drawer isOpen={isOpen}>
        <LinkList>
          {links.map(({to, exact, label}, index) => (
            <LinkWrapper key={index}>
              <Link to={to} exact={exact} onClick={clickHandler}>{label}</Link>
            </LinkWrapper>
          ))}
        </LinkList>
      </Drawer>
      {isOpen && <Backdrop onClick={onClose} />}
    </>
  )
}
