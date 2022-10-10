import React from 'react';
import styled from 'styled-components';
import Layout from '../components/shared/Layout';

const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 150px 100px;
  
`

function Guide(){
  return(
    <Layout>
      <Container>가이드 페이지</Container>
    </Layout>
  )
}

export default Guide;