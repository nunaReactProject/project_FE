import React, { useState } from 'react';
import Title from '../../components/Login/TItle';
import * as S from './Login.styled';
import IdInput from '../../components/Login/IdInput';
import PasswordInput from '../../components/Login/PasswordInput';
import LoginButton from '../../components/Login/LoginButton';
import SocialLogin from '../../components/Login/SocialLogin';
import { useLoginMutation } from '../../hooks/useLoginMutation';

export default function Login() {
  const [info, setInfo] = useState({ userId: '', password: '' });

  const { mutate: loginMutate } = useLoginMutation();

  const onLogin = () => {
    loginMutate({ info });
  };

  return (
    <S.Container>
      <Title />
      <IdInput info={info} setInfo={setInfo} />
      <PasswordInput info={info} setInfo={setInfo} />
      <LoginButton onLogin={onLogin} />
      <SocialLogin />
    </S.Container>
  );
}
