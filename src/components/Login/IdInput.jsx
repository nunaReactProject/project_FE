import React from 'react';
import * as S from './IdInput.styled';

export default function IdInput({ info, setInfo }) {
  const onChangeId = (e) => {
    setInfo({ ...info, userId: e.target.value });
  };

  return (
    <S.InputContainer>
      <S.Title>User ID</S.Title>
      <S.InputBox>
        <S.UserIcon />
        <S.Input placeholder='아이디 입력' value={info.userId} onChange={(e) => onChangeId(e)} />
      </S.InputBox>
    </S.InputContainer>
  );
}
