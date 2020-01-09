import React, { useState } from 'react';
import MenuToggle from '../../components/MenuToggle/MenuToggle';
import { GlobalStyles } from '../../globalStyles.styled';
import { Layout, Main } from './Layout.styled';

export default ({ children }) => {
  let [menu, setMenu] = useState(false);

  const toggleMenuHandler = () => {
    setMenu(!menu);
  };

  return (
    <Layout>
      <GlobalStyles />
      <MenuToggle onToggle={toggleMenuHandler} isOpen={menu} />
      <Main>{children}</Main>
    </Layout>
  );
};
