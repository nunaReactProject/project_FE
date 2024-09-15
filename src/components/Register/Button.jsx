import React from 'react';
import * as S from './Button.styled';

export default function Button({ onRegister, buttonState }) {
  return (
    <S.Button onClick={onRegister} buttonState={buttonState}>
      가입완료
    </S.Button>
  );
}
