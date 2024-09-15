import React, { useEffect, useState } from 'react';
import Title from '../../components/Login/TItle';
import * as S from './Login.styled';
import IdInput from '../../components/Login/IdInput';
import PasswordInput from '../../components/Login/PasswordInput';
import LoginButton from '../../components/Login/LoginButton';
import SocialLogin from '../../components/Login/SocialLogin';
import { useLoginMutation } from '../../hooks/useLoginMutation';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

export default function Login() {
  const [info, setInfo] = useState({ userId: '', password: '' });

  const { mutate: loginMutate } = useLoginMutation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [warning, setWarning] = useState('');
  const [buttonState, setButtonState] = useState(false);

  const onLogin = () => {
    loginMutate(
      { info },
      {
        onSuccess: () => {
          navigate('/');
          queryClient.invalidateQueries(['userInfo']);
        },
        onError: () => {
          setWarning('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      }
    );
  };

  useEffect(() => {
    if (info.userId !== '' && info.password !== '') {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [info]);

  return (
    <S.Container>
      <Title />
      <IdInput info={info} setInfo={setInfo} />
      <PasswordInput info={info} setInfo={setInfo} />
      <LoginButton warning={warning} onLogin={onLogin} buttonState={buttonState} />
      <SocialLogin />
    </S.Container>
  );
}
