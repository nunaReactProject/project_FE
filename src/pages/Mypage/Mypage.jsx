import React, { useEffect } from 'react';
import TabMenu from '../../components/Mypage/TabMenu';
import OrderHistory from '../../components/Mypage/OrderHistory';
import * as S from './Mypage.styled';
import { useUserInfoQuery } from '../../hooks/useUserInfoQuery';
import { useNavigate } from 'react-router-dom';

export default function Mypage() {
  const { data: userInfo, isPending } = useUserInfoQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo && isPending) {
      navigate('/login');
    }
  }, [userInfo, isPending]);

  return (
    <S.Container>
      <TabMenu />
      <OrderHistory />
    </S.Container>
  );
}
