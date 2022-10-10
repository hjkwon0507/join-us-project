import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IoMdClose } from "react-icons/io";

import LogoSrc from '../../assets/images/login-logo.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(11,19,30,.37);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: "BMJUA";
  input {
    font-family: "BMJUA";
  }
`
const LoginWrapper = styled.div`
  width: 400px;
  height: 560px;
  background-color: #f6f6f6;
  margin: 6% auto 0;
  border-radius: 30px;
  padding-top: 20px;
  text-align: center;
`
const CloseBtn = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin-right: 20px;
  svg {
    width: 30px;
    height: 30px;
    color: #666;
  }
`
const Logo = styled.h1`
  width: 150px;
  height: 45px;
  background-image: url(${LogoSrc});
  background-position: center;
  background-size: cover;
  margin: 30px auto;
`
const Title = styled.p`
  font-size: 1.5rem;
  color: #b0b0b0;
`
const LoginForm = styled.form`
  width: 100%;
  margin: 30px auto 40px;
  padding: 0 60px;
`
const Id = styled.div`
  position: relative; 
  span {
    position: absolute;
    top: 8px;
    left: 0;
    color: #b0b0b0;
    transition: .5s all;
  }
  &:hover .idSpan {
    top: -5px;
    color: #c69aff;
  }
  &:hover input {
    border-bottom: 3px solid #c69aff;
  }
`
const IdInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 auto 20px;
  border-bottom: 3px solid #b0b0b0;
  transition: .5s all;
  &:focus {
    border-bottom: 3px solid #c69aff;
  }
`
const Password = styled.div`
  position: relative; 
  span {
    position: absolute;
    top: 8px;
    left: 0;
    color: #b0b0b0;
    transition: .5s all;
  }
  &:hover .pwSpan {
    top: -5px;
    color: #c69aff;
  }
  &:hover input {
    border-bottom: 3px solid #c69aff;
  }
`
const PasswordInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 auto 40px;
  border-bottom: 3px solid #b0b0b0;
  transition: .5s all;
  &:focus {
    border-bottom: 3px solid #c69aff;
  }
`
const LoginBtn = styled.input`
  margin: 0 auto;
  width: 75%;
  border: 2px solid #c69aff;
  padding: 3px 0;
  border-radius: 10px;
  color: #c69aff;
  transition: .5s all;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    background-color: #c69aff;
    color: #fff;
  }
`
const Find = styled.div`
  width: 100%;
  margin-bottom: 30px;
  a {
    transition: .5s all;
    color: #b0b0b0;
  }
  a:hover {
    color: #c69aff;
  }
  span {
    color: #b0b0b0;
    font-weight: bold;
    display: inline-block;
    width: 30px;
  }
`
const Text = styled.p`
  color: #c69aff;
  font-weight: bold;
  margin-bottom: 20px;
`
const FindBtn = styled.div`
`
const FindId = styled.a`
  display: inline-block;
`
const FindPw = styled.a`
  display: inline-block;
`
const SignUpLink = styled(Link)`
  transition: .5s all;
  color: #b0b0b0;
  font-size: 1.3rem;
  &:hover{
    color: #c69aff;
  }
`

function Login({setLogin}){
  return(
    <Container>
      <LoginWrapper>
        <CloseBtn>
          <IoMdClose
            onClick={()=>{setLogin(false);}}
          />
        </CloseBtn>
        <Logo />
        <Title>로그인</Title>
        <LoginForm>
          <Id>
            <span className="idSpan">아이디</span>
            <IdInput
              name="id"
              type="id"
              required
              onFocus={()=>{
                document.querySelector(".idSpan").style.top="-5px";
                document.querySelector(".idSpan").style.color="#c69aff";
              }}
              onBlur={()=>{
                document.querySelector(".idSpan").style.top="8px";
                document.querySelector(".idSpan").style.color="#b0b0b0";
              }}
            />
          </Id>
          <Password>
            <span className="pwSpan">비밀번호</span>
            <PasswordInput
              name="password"
              type="password"
              required
              onFocus={()=>{
                document.querySelector(".pwSpan").style.top="-5px";
                document.querySelector(".pwSpan").style.color="#c69aff";
              }}
              onBlur={()=>{
                document.querySelector(".pwSpan").style.top="8px";
                document.querySelector(".pwSpan").style.color="#b0b0b0";
              }}
            />
          </Password>
          <LoginBtn 
            type="submit"
            value="로그인"
          />
        </LoginForm>
        <Find>
          <Text>아이디나 비밀번호가 기억이 나지 않으신가요?</Text>
          <FindBtn>
            <FindId>아이디 찾기</FindId>
            <span>/</span>
            <FindPw>비밀번호 찾기</FindPw>
          </FindBtn>
        </Find>
        <SignUpLink to="/sign-up">회원가입</SignUpLink>
      </LoginWrapper>
    </Container>
  )
}

export default Login;