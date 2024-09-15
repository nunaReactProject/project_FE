import React from 'react';
import * as S from './TextInput.styled';

export default function TextInput({ title, placeholder, userInfo, setUserInfo, userIdWarning, nameWarning }) {
  const onChange = (e) => {
    if (title === '아이디') setUserInfo({ ...userInfo, userId: e.target.value });
    if (title === '이름') setUserInfo({ ...userInfo, name: e.target.value });
  };

  let value;
  if (title === '아이디') value = userInfo.userId;
  if (title === '이름') value = userInfo.name;

  return (
    <>
      <S.InputBox>
        <S.Title>{title}</S.Title>
        <S.Input type='text' maxLength={14} placeholder={placeholder} value={value} onChange={onChange} />
      </S.InputBox>
      {userIdWarning && title === '아이디' && <S.Warning>{userIdWarning}</S.Warning>}
      {nameWarning && title === '이름' && <S.Warning>{nameWarning}</S.Warning>}
    </>
  );
}
