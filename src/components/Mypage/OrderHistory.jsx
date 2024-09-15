import React, { useEffect, useState } from 'react';
import * as S from './OrderHistory.styled';
import { useOrderListQuery } from '../../hooks/useOrderList';
import { useOrderDeleteMutation } from '../../hooks/useOrderDeleteMutation';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

export default function OrderHistory() {
  const [query, setQuery] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState({
    page: query.get('page') || 1
  });

  const { data } = useOrderListQuery(searchQuery);

  const { mutate: orderDeleteMutate } = useOrderDeleteMutation();
  const queryClient = useQueryClient();

  useEffect(() => {
    const params = new URLSearchParams(searchQuery);
    setQuery(params);
  }, [searchQuery]);

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

  const handlePageClick = ({ selected }) => {
    setSearchQuery({ ...searchQuery, page: selected + 1 });
  };

  return (
    <S.Container>
      <S.TabTitle>주문내역</S.TabTitle>
      <S.ProductWrapper>
        <S.Hr />
        {data?.products?.map((product, index) => {
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
      <S.ReactPaginateStyle
        nextLabel=' >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={data?.totalPageNum}
        forcePage={searchQuery.page - 1}
        previousLabel='< '
        renderOnZeroPageCount={null}
      />
    </S.Container>
  );
}
