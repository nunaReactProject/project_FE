import React, { useState } from 'react';
import * as S from './TabMenu.styled';

export default function TabMenu() {
  const [tabHighlight, setTabHighlight] = useState('회원정보');

  const onSwitchTab = (tab) => {
    setTabHighlight(tab);
  };

  return (
    <S.Container>
      <S.ContentBox>
        <S.Highlight highlight={tabHighlight === '회원정보'} />
        <S.Content onClick={() => onSwitchTab('회원정보')}>회원정보</S.Content>
      </S.ContentBox>
      <S.ContentBox>
        <S.Highlight highlight={tabHighlight === '주문내역'} />
        <S.Content onClick={() => onSwitchTab('주문내역')}>주문내역</S.Content>
      </S.ContentBox>
    </S.Container>
  );
}
