import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/shared/Header';
import Start from '../components/Home/Start';
import Welcome from '../components/Home/Welcome';
import Footer from '../components/shared/Footer';

const VisualHeight = window.innerHeight;

const Container = styled.div``
const Visual = styled.div`
  width: 100%;
  height: ${VisualHeight}px;
  position: relative;
`


function Home(){
  const [login, setLogin] = useState(false);

  return(
    <Container>
      <Visual>
        <Header />
        <Start login={login} setLogin={setLogin}></Start>
      </Visual>
      <Welcome />
      <Footer />
    </Container>
  )
}

export default Home;