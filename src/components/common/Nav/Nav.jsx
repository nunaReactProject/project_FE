import React, { useState } from 'react';
import * as S from './Nav.styled';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const onNavigatePage = (path) => {
    navigate(path);
  };

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearchEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?name=${searchInput}`);
    }
  };

  const onSearch = () => {
    navigate(`/search?name=${searchInput}`);
  };

  return (
    <S.Container>
      <S.Logo onClick={() => onNavigatePage('/')}>TicketPark</S.Logo>
      <S.SearchBox>
        <S.SearchInput
          value={searchInput}
          placeholder='검색어를 입력해주세요'
          onChange={(e) => onChangeSearchInput(e)}
          onKeyDown={(e) => onSearchEnter(e)}
        />
        <S.SearchIcon onClick={onSearch} />
      </S.SearchBox>
    </S.Container>
  );
}
