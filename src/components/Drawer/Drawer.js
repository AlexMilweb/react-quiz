import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { Drawer, LinkList, LinkWrapper, Link } from './Drawer.styled';

const links = [
  {
    to: '/',
    label: 'Список',
    exact: true,
  },
  {
    to: '/auth',
    label: 'Авторизация',
    exact: false,
  },
  {
    to: '/quiz-creator',
    label: 'Создать тест',
    exact: false,
  },
];

export default ({ isOpen, onClose }) => {
  const clickHandler = () => {
    onClose();
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
  );
}
