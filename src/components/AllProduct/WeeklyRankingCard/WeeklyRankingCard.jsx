// WeeklyRankingCard.jsx

import React from 'react';
import * as S from './WeeklyRankingCard.styled.js';

const WeeklyRankingCard = ({ products }) => {
  return (
    <S.ProductList>
      {products?.map((product) => (
        <S.ProductItem key={product.id}>
          <S.ProductImgContainer>
            <S.ProductImg src={`http://www.kopis.or.kr${product.poster}`} alt={product.prfnm} />
            <S.ProductRank>{product.rnum}</S.ProductRank>
          </S.ProductImgContainer>
          <S.ProductInfo>
            <S.TitleInfo>{product.prfnm}</S.TitleInfo>
            <br />
            <S.PeriodInfo>{product.prfpd}</S.PeriodInfo>
          </S.ProductInfo>
        </S.ProductItem>
      ))}
    </S.ProductList>
  );
};

export default WeeklyRankingCard;
