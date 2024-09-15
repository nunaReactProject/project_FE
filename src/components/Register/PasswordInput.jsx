import React from 'react';
import * as S from './PasswordInput.styled';

export default function PasswordInput({
  title,
  placeholder,
  userInfo,
  setUserInfo,
  validPassword,
  setValidPassword,
  passwordWarning,
  passwordValidWarning
}) {
  const onChange = (e) => {
    if (title === '비밀번호') setUserInfo({ ...userInfo, password: e.target.value });
    if (title === '비밀번호 확인') setValidPassword(e.target.value);
  };

  let value;
  if (title === '비밀번호') value = userInfo.password;
  if (title === '비밀번호 확인') value = validPassword;

  return (
    <>
      <S.InputBox>
        <S.Title>{title}</S.Title>
        <S.Input type='password' placeholder={placeholder} value={value} onChange={onChange} />
      </S.InputBox>
      {passwordWarning && title === '비밀번호' && <S.Warning>{passwordWarning}</S.Warning>}
      {passwordValidWarning && title === '비밀번호 확인' && <S.Warning>{passwordValidWarning}</S.Warning>}
    </>
  );
}
