import React from 'react';
import * as S from './LoginButton.styled';

export default function LoginButton({ onLogin }) {
  return <S.Button onClick={onLogin}>로그인</S.Button>;
}
