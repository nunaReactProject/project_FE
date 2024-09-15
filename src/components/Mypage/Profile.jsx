import React from 'react';
import { useUserInfoQuery } from '../../hooks/useUserInfoQuery';
import * as S from './Profile.styled';

export default function Profile() {
  const { data: userInfo, isPending, isError } = useUserInfoQuery();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    return date.toLocaleDateString('ko-KR', options);
  };
  return (
    <S.Container>
      <S.TabTitle>회원정보</S.TabTitle>
      <S.Text>아이디 : {userInfo?.data?.data.userId}</S.Text>
      <S.Text>이름 : {userInfo?.data?.data.name}</S.Text>
      <S.Text>가입 날짜 : {formatDate(userInfo?.data?.data.createdAt)}</S.Text>
    </S.Container>
  );
}
