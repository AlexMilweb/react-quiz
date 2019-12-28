import React from 'react';
import { GlobalStyles } from '../../globalStyles.styled';
import { Layout, Main } from './Layout.styled';

export default ({ children }) => (
  <Layout>
    <GlobalStyles />
    <Main>{children}</Main>
  </Layout>
);
