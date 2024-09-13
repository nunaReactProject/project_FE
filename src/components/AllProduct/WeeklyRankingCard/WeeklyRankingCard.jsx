import React from 'react';
import * as S from './WeeklyRankingCard.styled.js';

const WeeklyRankingCard = ({ product, onMouseEnter }) => {
  return (
    <S.ProductItem key={product.id} onMouseEnter={onMouseEnter}>
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
  );
};

export default WeeklyRankingCard;
