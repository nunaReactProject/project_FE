import React, { useEffect } from 'react';
import * as S from './Header.styled.js';
import { useNavigate } from 'react-router-dom';
import { useUserInfoQuery } from '../../../hooks/useUserInfoQuery.js';
import { useLogoutMutation } from '../../../hooks/useLogoutMutation.js';
import { useQueryClient } from '@tanstack/react-query';

export default function Header() {
  const { data: userInfo, isPending } = useUserInfoQuery();
  const { mutate: logoutMutation } = useLogoutMutation();

  const navigate = useNavigate();

  const onNavigatePage = (path) => {
    navigate(path);
  };
  const onLogout = () => {
    logoutMutation();
    navigate('/');
    window.location.reload();
  };

  if (userInfo) {
    return (
      <S.Overlay>
        <S.HeaderContainer>
          <S.UserName>{userInfo.data.data.name}님 반갑습니다.</S.UserName>
          <S.Hr>|</S.Hr>
          <S.HeaderButton onClick={() => onLogout()}>로그아웃</S.HeaderButton>
          <S.Hr>|</S.Hr>
          <S.HeaderButton onClick={() => onNavigatePage('/mypage')}>마이페이지</S.HeaderButton>
        </S.HeaderContainer>
      </S.Overlay>
    );
  }

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
