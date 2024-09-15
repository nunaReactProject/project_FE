import React from 'react';
import * as S from './PasswordInput.styled';
export default function PasswordInput({ info, setInfo }) {
  const onChangePassword = (e) => {
    setInfo({ ...info, password: e.target.value });
  };
  return (
    <S.InputContainer>
      <S.Title>Password</S.Title>
      <S.InputBox>
        <S.UserIcon />
        <S.Input
          type='password'
          placeholder='비밀번호 입력'
          value={info.password}
          onChange={(e) => onChangePassword(e)}
        />
      </S.InputBox>
    </S.InputContainer>
  );
}
