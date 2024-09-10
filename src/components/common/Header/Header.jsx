import React from 'react';
import * as S from './Header.styled.js';

export default function Header() {
  return (
    <S.Overlay>
      <S.HeaderContainer>
        <S.HeaderButton>로그인</S.HeaderButton>
        <S.Hr>|</S.Hr>
        <S.HeaderButton>회원가입</S.HeaderButton>
        <S.Hr>|</S.Hr>
        <S.HeaderButton>마이페이지</S.HeaderButton>
      </S.HeaderContainer>
    </S.Overlay>
  );
}
