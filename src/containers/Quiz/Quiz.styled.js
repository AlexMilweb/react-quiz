import styled from 'styled-components'
import Preloader from '../../components/Preloader/Preloader'

export const Quiz = styled.div`
  padding-top: 100px;
  flex-grow: 1;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  color: white;
`;

export const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 600px;
`;

export const PreloaderStyled = styled(Preloader)`
  width: 80px;
  height: 80px;
  margin-right: auto;
  margin-left: auto;
  display: block;
`;
