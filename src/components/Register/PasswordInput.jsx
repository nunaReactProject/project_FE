import React from 'react';
import * as S from './PasswordInput.styled';

export default function PasswordInput({ title, placeholder }) {
  return (
    <S.InputBox>
      <S.Title>{title}</S.Title>
      <S.Input placeholder={placeholder} />
    </S.InputBox>
  );
}
