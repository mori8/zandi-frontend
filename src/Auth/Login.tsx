import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = (props: any) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const onClickLogin = async () => {
    try {
      const response = await axios.post('http://')
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };


  return (
    <Container>
      <LeftContainer>
        <img src="gdsc_sookmyung_logo.png" alt="" width="180px"/> <br/>
        <LoginPageTitle>
          정원사 눈송이와 함께 <br/>
          매일 성장하는 나를 기록해요.
        </LoginPageTitle>
        <LoginPageSubTitle>
          어쩌구 저쩌구 머시기 머시기 궁시렁 궁시렁 <br/>
          어쩌구 저쩌구 머시기 머시기 궁시렁 궁시렁 부스럭부스럭
        </LoginPageSubTitle>
      </LeftContainer>
      <LoginContainer>
      <LoginInput placeholder='username'></LoginInput>
      <LoginInput placeholder='password' type="password"></LoginInput>
      <LoginButton>로그인</LoginButton>
      <SignUpLink to="/signup">회원가입</SignUpLink>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 4rem;
`;


const LoginPageTitle = styled.h1`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
  margin: 0;
`;

const LoginPageSubTitle = styled.h3`
  color: #999;
  font-size: 0.9rem;
  font-weight: 400;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 100%;
`;

const SignUpLink = styled(Link)`
  margin-top: 1.2rem;
  color: #666;
  font-size: 0.9rem;
`;

const LoginButton = styled.button`
  padding: 0.6rem;
  border: none;
  border-radius: 12px;
  margin-top: 0.8rem;
  background-color: #4285f4;
  color: #fff;
  corsor: pointer;
  width: 100%;
`;

export default Login;