import React from 'react';
import styled from 'styled-components';

import Login from '../Home/Login';

import VisualSrc from '../../assets/images/main.png';

const StartHeight = window.innerHeight;

const Container = styled.div`
  width: 100%;
  height: ${StartHeight}px;
  text-align: center;
  background-image: url(${VisualSrc});
  background-size: cover;
  background-position: 0 -100px;
  background-repeat: no-repeat;
  padding-top: 250px;
`;
const Msg = styled.p`
  font-size: 50px;
  color: #fff;
  font-weight: bold;
  text-shadow: 6px 6px 6px #333;
`;
const Btn = styled.a`
  width: 30%;
  margin: 10% auto;
  padding: 1%;
  border: 1px solid #af70ff;
  background-color: #af70ff;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  border-radius: 30px;
  box-shadow: 5px 5px 15px .1em #333;
  transition: .5s all;
  &:hover{
    background-color: transparent;
  }
`

function Start({login, setLogin}){

  return(
    <Container>
      <Msg>이제 조인은 온라인으로 매칭하기!</Msg>
      <Btn onClick={()=>{
        setLogin(true);
      }}>시작하기</Btn>
      {
        login? (
          <Login setLogin={setLogin} />
        ): null
      }
    </Container>
  )
}

export default Start;