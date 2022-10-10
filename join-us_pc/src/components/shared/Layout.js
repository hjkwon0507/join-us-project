import React from 'react'
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div``
const Contents = styled.div``

function Layout({children}){
  return(
    <Container>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </Container>
  );
}

export default Layout;