import React from 'react';
import * as S from './IdInput.styled';

export default function IdInput() {
  return (
    <S.InputContainer>
      <S.Title>User ID</S.Title>
      <S.InputBox>
        <S.UserIcon />
        <S.Input placeholder='아이디 입력' />
      </S.InputBox>
    </S.InputContainer>
  );
}
