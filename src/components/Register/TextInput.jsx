import React from 'react';
import * as S from './TextInput.styled';

export default function TextInput({ title, placeholder }) {
  return (
    <S.InputBox>
      <S.Title>{title}</S.Title>
      <S.Input placeholder={placeholder} />
    </S.InputBox>
  );
}
