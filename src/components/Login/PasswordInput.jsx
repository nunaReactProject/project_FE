import React from 'react';
import * as S from './PasswordInput.styled';
export default function PasswordInput() {
  return (
    <S.InputContainer>
      <S.Title>Password</S.Title>
      <S.InputBox>
        <S.UserIcon />
        <S.Input type='password' placeholder='비밀번호 입력' />
      </S.InputBox>
    </S.InputContainer>
  );
}
