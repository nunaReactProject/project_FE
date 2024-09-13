import React, { useState, useEffect } from 'react';
import * as S from './WeeklyRanking.styled.js';
import { useRankProductQuery } from '../../../hooks/useRankProduct.js';
import WeeklyRankingCard from '../WeeklyRankingCard/WeeklyRankingCard.jsx';
import Color from 'color-thief-react';

const WeeklyRanking = ({ ststype, date, catecode = '', area = '' }) => {
  const { data, isLoading, error } = useRankProductQuery({ ststype, date, catecode, area });
  const [bgColor, setBgColor] = useState('#acacac');

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.slice(0, 5);

  return (
    <div>
      <S.WeeklyRankingSection>
        <S.WeeklyRankingBg style={{ backgroundColor: bgColor }}></S.WeeklyRankingBg>
        <S.HeaderRanking>랭킹</S.HeaderRanking>
        <S.SubHeaderRanking>주간베스트</S.SubHeaderRanking>
        <S.ProductList>
          {products.map((product) => (
            <Color key={product.id} src={`http://www.kopis.or.kr${product.poster}`} format='hex'>
              {({ data, loading, error }) => {
                console.log('Color:', data);
                if (loading) return <div>Loading color...</div>;
                if (error) return <div>Error: {error.message}</div>;

                return <WeeklyRankingCard product={product} onMouseEnter={() => setBgColor(data)} />;
              }}
            </Color>
          ))}
        </S.ProductList>
      </S.WeeklyRankingSection>
    </div>
  );
};

export default WeeklyRanking;
