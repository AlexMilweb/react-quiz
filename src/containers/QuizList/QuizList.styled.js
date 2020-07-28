import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader'

export const QuizList = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  flex-grow: 1;
  width: 100%;
  background-image: linear-gradient(90deg, #fd8355 0%, #f0576c 37%, #f79cbd 100%);
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 25px;
`;

export const Wrapper = styled.div``;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #363f54;
  }
`;

export const PreloaderStyled = styled(Preloader)`
  width: 80px;
  height: 80px;
  margin-right: auto;
  margin-left: auto;
  display: block;
`;
