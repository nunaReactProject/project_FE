import React from 'react';
import * as S from './PasswordInput.styled';
export default function PasswordInput() {
  return (
    <S.StyledBox>
      <S.UserIcon />
      <S.Input type='password' placeholder='비밀번호' />
    </S.StyledBox>
  );
}
