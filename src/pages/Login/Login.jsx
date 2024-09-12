import React from 'react';
import Title from '../../components/Login/TItle';
import * as S from './Login.styled';
import IdInput from '../../components/Login/IdInput';
import PasswordInput from '../../components/Login/PasswordInput';
import LoginButton from '../../components/Login/LoginButton';
import SocialLogin from '../../components/Login/SocialLogin';

export default function Login() {
  return (
    <S.Container>
      <Title />
      <IdInput />
      <PasswordInput />
      <LoginButton />
      <SocialLogin />
    </S.Container>
  );
}
