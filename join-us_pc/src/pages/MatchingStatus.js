import React from 'react';
import styled from 'styled-components';

import Layout from '../components/shared/Layout';

const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 150px 100px;
`

function MatchingStatus(){
  return(
    <Layout>
      <Container>매칭현황 페이지</Container>
    </Layout>
  )
}

export default MatchingStatus;