import React from 'react';
import * as S from './LoginButton.styled';

export default function LoginButton({ onLogin, warning, buttonState }) {
  return (
    <>
      {warning && <S.Warning>{warning}</S.Warning>}
      <S.Button onClick={onLogin} buttonState={buttonState}>
        로그인
      </S.Button>
    </>
  );
}
