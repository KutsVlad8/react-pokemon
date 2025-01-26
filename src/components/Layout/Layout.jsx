import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Wrapper } from './Layuot.styled';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>

      <Footer />
    </>
  );
};

export default Layout;
