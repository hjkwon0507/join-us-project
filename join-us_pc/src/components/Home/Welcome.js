import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  color: #333;
  padding-top: 60px;
`;
const Title = styled.h2`
  padding: 0 100px; 
  font-size: 50px;
  span {
    color: #af70ff;
  }
`
const Content = styled.div`
  width: 100%;
  padding-bottom: 60px;
`
const TextBox = styled.div`
  width: 100%;
  padding: 50px 0 0 120px;
  font-size: 20px;
  p {
    line-height: 2.5em;
  }
  span {
    color: #af70ff;
  }
`

function Welcome(){
  return(
    <Container>
      <Title><span>Join</span> us?</Title>
      <Content>
        <TextBox>
          <p>모르는 사람에게 혹은 조인하자는 말 자체가 <span>어색한</span> 우리</p>
          <p>그런 이유로 조인을 힘들어하는 우리 목자들을 위한 <span>사이트</span></p>
          <p>이제는 <span>간편</span>하게 보내보는 조인 신청! <strong>Join us?</strong></p>
        </TextBox>
      </Content>
    </Container>  
  );
}

export default Welcome;