import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import LogoSrc from '../assets/images/signup-logo.png';
import ArrowSrc from '../assets/images/select-arrow.png'

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 50px;
  color: #8a8a8a;
  p {
    margin-bottom: 10px;
  }
  input,
  select {
    height: 45px;
    padding: 10px;
  }
`
const Logo = styled(Link)`
  width: 150px;
  height: 46px;
  background-image: url(${LogoSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 40px 0 30px;
`
const SignUpForm = styled.form`
  width: 800px;
  padding: 25px 50px 40px;
  background-color: #efefef;
  select {
    background-color: #fff;
  }
`
const Text = styled.p``
const Input = styled.input`
  width: 250px;
  background-color: #fff;
  border: 1px solid #8a8a8a;
`
const Select = styled.select`
  width: 250px;
  border: 1px solid #8a8a8a;
  background: url(${ArrowSrc}) no-repeat 95% 50%;
  background-size: 20px 15px;
  color: #8a8a8a;
`
const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  div {
    width: 360px;
  }
`
const Id = styled.div`
  padding: 20px 0;
  input {
    margin-right: 30px;
  }
  div {
    display: flex;
    justify-content: start;
    align-items: center;
  }
`
const DuplicateCk = styled.button`
  width: 70px;
  padding: 5px;
  background-color: #c69aff;
  border: 1px solid #8a8a8a;
  color: #fff;
`
const Password = styled.div`
  height: 100px;
`
const PasswordCk = styled.div`
  height: 100px;
`
const PasswordMsg = styled.p`
  color: red;
  font-size: 14px;
  &.pw-ok {
    color: blue;
  }
`
const Name = styled.div`
  padding: 20px 0;
`
const Phone = styled.div`
`
const Birth = styled.div`
`
const Sex = styled.div`
`
const Department = styled.div`
`
const Email = styled.div`
  margin-bottom: 50px;
  padding: 20px 0;
`
const SignUpBtn = styled.button`
  width: 180px;
  padding: 5px 0 ;
  background-color: #c69aff;
  border: 2px solid #c69aff;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s all;
  &:hover {
    color: #c69aff;
    background-color: transparent;
  }
`

function SignUp(){
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCk, setPasswordCk] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  }
  const onDuplicateCkHandler = (e) => {
    e.preventDefault();
    console.log("중복확인");
    // const [idlist, setIdlist] = useState([]);
    // const url = "http://127.0.0.1:8000/signup/getmemberidlist/";
    const url = "http://20.196.195.20:8000/signup/getmemberidlist/";
    axios.get(url)
    .then(function(response) {
        console.log("성공");
        console.log(response.data);
    })
    .catch(function(error) {
        console.log("실패");
        console.log(error);
    })
  }
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }
  const onPasswordCkHandler = (e) => {
    setPasswordCk(e.currentTarget.value);
  }
  const onPasswordConfirmHandler = (e) => {
    if (password !== passwordCk){
      return setConfirmPassword("일치하지 않습니다.");
    }
    else {
      return setConfirmPassword("확인 완료");
    }
  }
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  }
  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  }
  const onBirthHandler = (e) => {
    setBirth(e.currentTarget.value);
  }
  const onSexHandler = (e) => {
    setSex(e.currentTarget.value);
  }
  const onDepartmentHandler = (e) => {
    setDepartment(e.currentTarget.value);
  }
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("가입 완료 되었습니다!")
    console.log(`아이디 : ${id}`);
    console.log(`비밀번호 : ${password}`);
    console.log(`이름 : ${name}`);
    console.log(`전화번호 : ${phone}`);
    console.log(`또래 : ${birth}`);
    console.log(`성별 : ${sex}`);
    console.log(`부서 : ${department}`);
    console.log(`email : ${email}`);

    axiosPost();
  }

  // function axiosGet() {
  //   const [text, setText] = useState([]);
  //   axios
  //     .get("http://127.0.0.1:8000/signup/getmemberidlist/")
  //     .then((response) => {
  //       setText([...response.data]);
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  function axiosPost() {

    axios.post("http://20.196.195.20:8000/signup/createsignupdatas/", {
        mb_id: id,
        mb_pw: password,
        mb_name: name,
        mb_department: department,
        mb_phonenumber: phone,
        mb_birth: birth,
        mb_sex: sex,
        mb_email: email,
      },
       { withCredentials: true }
      ).then(function (response) {
        console.log(response);
        navigate.push("/");
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }

  return(
    <Container>
      <Logo to="/" />
      <SignUpForm>
        <Id>
          <Text>카카오톡 ID (로그인 할 때의 아이디 입니다. 상대 목장과 연결을 위해 카카오 아이디를 적어주세요.)</Text>
          <div>
              <Input
                name="Id"
                type="text"
                placeholder="아이디를 입력해주세요"
                onChange={onIdHandler}
              />
              <DuplicateCk
                onClick={onDuplicateCkHandler}
              >중복 확인</DuplicateCk>
          </div>
        </Id>
        <FlexBox>
          <Password>
            <Text>비밀번호</Text>
            <Input
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              maxLength="10"
              value={password}
              onChange={onPasswordHandler}
            />
          </Password>
          <PasswordCk>
            <Text>비밀번호 확인</Text>
            <Input
              name="passwordCk"
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              required
              maxLength="10"
              value={passwordCk}
              onChange={onPasswordCkHandler}
              onKeyUp={onPasswordConfirmHandler}
            />
            <PasswordMsg className={confirmPassword === "확인 완료" ? "pw-ok" : null}>
              {confirmPassword}
            </PasswordMsg>
          </PasswordCk>
        </FlexBox>
        <Name>
          <Text>이름(본인 교적에 나와있는 이름과 알파벳 대문자까지 입력해주시길 바랍니다.)</Text>
          <Input
            name="name"
            type="text"
            placeholder="ex. 이학준A"
            maxLength="5"
            required
            onChange={onNameHandler}
          />
        </Name>
        <FlexBox>
          <Phone>
            <Text>전화번호</Text>
            <Input
              name="phone"
              type="text"
              placeholder="'-'없이 입력해주세요'"
              maxLength="11"
              required
              onChange={onPhoneHandler}
            />
          </Phone>
          <Birth>
            <Text>또래</Text>
            <Input
              name="birth"
              type="text"
              placeholder="00"
              maxLength="2"
              required
              onChange={onBirthHandler}
            />
          </Birth>
        </FlexBox>
        <FlexBox>
          <Sex>
            <Text>성별</Text>
            <Select
              required
              onChange={onSexHandler}
            >
              <option defaultValue>선택</option>
              <option>남</option>
              <option>여</option>
            </Select>
          </Sex>
          <Department>
            <Text>부서</Text>
            <Select
              required
              onChange={onDepartmentHandler}
            >
              <option defaultValue>선택</option>
              <option>판교 1부</option>
              <option>판교 2부</option>
              <option>판교 3부</option>
              <option>휘문 1부</option>
              <option>휘문 2부</option>
              <option>휘문 3부</option>
              <option>휘문 4부</option>
            </Select>
          </Department>
        </FlexBox>
        <Email>
          <Text>E-mail (아이디, 비밀번호를 찾기 위한 정보입니다.)</Text>
            <Input
              name="email"
              type="email"
              placeholder="wooridle@naver.com"
              required
              onChange={onEmailHandler}
            />
        </Email>
        <SignUpBtn
          type="submit"
          onClick={onSubmitHandler}
        >가입하기</SignUpBtn>
      </SignUpForm>
    </Container>
  )
}

export default SignUp;
