import React from 'react';
import * as S from './WeeklyRanking.styled.js';
import { useRankProductQuery } from '../../../hooks/useRankProduct.js';
import WeeklyRankingCard from '../WeeklyRankingCard/WeeklyRankingCard.jsx';

const WeeklyRanking = ({ ststype, date, catecode = '', area = '' }) => {
  const { data, isLoading, error } = useRankProductQuery({ ststype, date, catecode, area });
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.slice(0, 5);
  console.log(date);
  return (
    <div>
      <S.WeeklyRankingSection>
        <S.WeeklyRankingBg></S.WeeklyRankingBg>
        <S.HeaderRanking>랭킹</S.HeaderRanking>
        <S.SubHeaderRanking>주간베스트</S.SubHeaderRanking>
        <WeeklyRankingCard products={products} />
      </S.WeeklyRankingSection>
    </div>
  );
};

export default WeeklyRanking;
