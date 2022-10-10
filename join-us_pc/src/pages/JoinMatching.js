import React from 'react';
import styled from 'styled-components';

import Layout from '../components/shared/Layout';

const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 150px 100px;
`

function JoinMatching(){
  return(
    <Layout>
      <Container>조인매칭 페이지</Container>
    </Layout>
  )
}

export default JoinMatching;