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
    console.log("????????????");
    // const [idlist, setIdlist] = useState([]);
    // const url = "http://127.0.0.1:8000/signup/getmemberidlist/";
    const url = "http://20.196.195.20:8000/signup/getmemberidlist/";
    axios.get(url)
    .then(function(response) {
        console.log("??????");
        console.log(response.data);
    })
    .catch(function(error) {
        console.log("??????");
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
      return setConfirmPassword("???????????? ????????????.");
    }
    else {
      return setConfirmPassword("?????? ??????");
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
    alert("?????? ?????? ???????????????!")
    console.log(`????????? : ${id}`);
    console.log(`???????????? : ${password}`);
    console.log(`?????? : ${name}`);
    console.log(`???????????? : ${phone}`);
    console.log(`?????? : ${birth}`);
    console.log(`?????? : ${sex}`);
    console.log(`?????? : ${department}`);
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
          <Text>???????????? ID (????????? ??? ?????? ????????? ?????????. ?????? ????????? ????????? ?????? ????????? ???????????? ???????????????.)</Text>
          <div>
              <Input
                name="Id"
                type="text"
                placeholder="???????????? ??????????????????"
                onChange={onIdHandler}
              />
              <DuplicateCk
                onClick={onDuplicateCkHandler}
              >?????? ??????</DuplicateCk>
          </div>
        </Id>
        <FlexBox>
          <Password>
            <Text>????????????</Text>
            <Input
              name="password"
              type="password"
              placeholder="??????????????? ??????????????????"
              required
              maxLength="10"
              value={password}
              onChange={onPasswordHandler}
            />
          </Password>
          <PasswordCk>
            <Text>???????????? ??????</Text>
            <Input
              name="passwordCk"
              type="password"
              placeholder="??????????????? ??? ??? ??? ??????????????????"
              required
              maxLength="10"
              value={passwordCk}
              onChange={onPasswordCkHandler}
              onKeyUp={onPasswordConfirmHandler}
            />
            <PasswordMsg className={confirmPassword === "?????? ??????" ? "pw-ok" : null}>
              {confirmPassword}
            </PasswordMsg>
          </PasswordCk>
        </FlexBox>
        <Name>
          <Text>??????(?????? ????????? ???????????? ????????? ????????? ??????????????? ?????????????????? ????????????.)</Text>
          <Input
            name="name"
            type="text"
            placeholder="ex. ?????????A"
            maxLength="5"
            required
            onChange={onNameHandler}
          />
        </Name>
        <FlexBox>
          <Phone>
            <Text>????????????</Text>
            <Input
              name="phone"
              type="text"
              placeholder="'-'?????? ??????????????????'"
              maxLength="11"
              required
              onChange={onPhoneHandler}
            />
          </Phone>
          <Birth>
            <Text>??????</Text>
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
            <Text>??????</Text>
            <Select
              required
              onChange={onSexHandler}
            >
              <option defaultValue>??????</option>
              <option>???</option>
              <option>???</option>
            </Select>
          </Sex>
          <Department>
            <Text>??????</Text>
            <Select
              required
              onChange={onDepartmentHandler}
            >
              <option defaultValue>??????</option>
              <option>?????? 1???</option>
              <option>?????? 2???</option>
              <option>?????? 3???</option>
              <option>?????? 1???</option>
              <option>?????? 2???</option>
              <option>?????? 3???</option>
              <option>?????? 4???</option>
            </Select>
          </Department>
        </FlexBox>
        <Email>
          <Text>E-mail (?????????, ??????????????? ?????? ?????? ???????????????.)</Text>
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
        >????????????</SignUpBtn>
      </SignUpForm>
    </Container>
  )
}

export default SignUp;
