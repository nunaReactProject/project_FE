import React, { useEffect, useState } from 'react';
import TabMenu from '../../components/Mypage/TabMenu';
import OrderHistory from '../../components/Mypage/OrderHistory';
import * as S from './Mypage.styled';
import { useUserInfoQuery } from '../../hooks/useUserInfoQuery';
import { useNavigate } from 'react-router-dom';
import Profile from '../../components/Mypage/Profile';

export default function Mypage() {
  const { data: userInfo, isPending, isError } = useUserInfoQuery();
  const [tabHighlight, setTabHighlight] = useState('주문내역');
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  return (
    <S.Container>
      <TabMenu tabHighlight={tabHighlight} setTabHighlight={setTabHighlight} />
      {tabHighlight === '회원정보' && <Profile />}
      {tabHighlight === '주문내역' && <OrderHistory />}
    </S.Container>
  );
}
