import React from 'react';
import * as S from './IdInput.styled';

export default function IdInput() {
  return (
    <S.StyledBox>
      <S.UserIcon />
      <S.Input placeholder='아이디' />
    </S.StyledBox>
  );
}
