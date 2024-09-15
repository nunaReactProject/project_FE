import React, { useEffect } from 'react';
import * as S from './OrderHistory.styled';
import { useOrderListQuery } from '../../hooks/useOrderList';
import { useOrderDeleteMutation } from '../../hooks/useOrderDeleteMutation';
import { useQueryClient } from '@tanstack/react-query';

export default function OrderHistory() {
  const { data } = useOrderListQuery();

  const { mutate: orderDeleteMutate } = useOrderDeleteMutation();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  const onDeleteOrder = (_id) => {
    orderDeleteMutate(
      { _id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['orderlist']);
        }
      }
    );
  };

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
                <S.CancelButton onClick={() => onDeleteOrder(product._id)}>예매 취소</S.CancelButton>
              </S.ProductBox>
              <S.Hr />
            </div>
          );
        })}
      </S.ProductWrapper>
    </S.Container>
  );
}
