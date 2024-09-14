import React from 'react';
import TabMenu from '../../components/Mypage/TabMenu';
import OrderHistory from '../../components/Mypage/OrderHistory';
import * as S from './Mypage.styled';

export default function Mypage() {
  return (
    <S.Container>
      <TabMenu />
      <OrderHistory />
    </S.Container>
  );
}
