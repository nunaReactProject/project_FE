import React from 'react';
import * as S from './Header.styled.js';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const onNavigatePage = (path) => {
    navigate(path);
  };
  return (
    <S.Overlay>
      <S.HeaderContainer>
        <S.HeaderButton onClick={() => onNavigatePage('/login')}>로그인</S.HeaderButton>
        <S.Hr>|</S.Hr>
        <S.HeaderButton onClick={() => onNavigatePage('/register')}>회원가입</S.HeaderButton>
        <S.Hr>|</S.Hr>
        <S.HeaderButton onClick={() => onNavigatePage('/mypage')}>마이페이지</S.HeaderButton>
      </S.HeaderContainer>
    </S.Overlay>
  );
}
