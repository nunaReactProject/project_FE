import React from 'react';
import * as S from './Nav.styled';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();

  const onNavigatePage = (path) => {
    navigate(path);
  };

  return (
    <S.Container>
      <S.Logo onClick={() => onNavigatePage('/')}>TicketPark</S.Logo>
      <S.SearchBox>
        <S.SearchInput placeholder='검색어를 입력해주세요' />
        <S.SearchIcon />
      </S.SearchBox>
    </S.Container>
  );
}
