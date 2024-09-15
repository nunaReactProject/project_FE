import React, { useEffect } from 'react';
import * as S from './OrderHistory.styled';
import { useOrderListQuery } from '../../hooks/useOrderList';

export default function OrderHistory() {
  const { data } = useOrderListQuery();

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return (
    <S.Container>
      <S.TabTitle>주문내역</S.TabTitle>
      <S.ProductWrapper>
        <S.Hr />
        {data?.map((product, index) => {
          return (
            <div key={index}>
              <S.ProductBox>
                <S.Poster src={product.poster} />
                <S.ContentBox>
                  <S.Title>{product.title}</S.Title>
                  <S.Day>
                    {product.date} &nbsp; | &nbsp; {product.running}
                  </S.Day>
                  <S.Location>{product.location}</S.Location>
                </S.ContentBox>
                <S.CancelButton>예매 취소</S.CancelButton>
              </S.ProductBox>
              <S.Hr />
            </div>
          );
        })}
      </S.ProductWrapper>
    </S.Container>
  );
}
