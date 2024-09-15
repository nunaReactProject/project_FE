import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './WeeklyRanking.styled.js';
import WeeklyRankingCard from '../WeeklyRankingCard/WeeklyRankingCard.jsx';
import { useWeeklyRankProductQuery } from '../../../hooks/useWeeklyRankProductQuery.js';
import { Spinner } from '@chakra-ui/react';

const WeeklyRanking = ({ ststype, date }) => {
  const { data, isLoading, error } = useWeeklyRankProductQuery({ ststype, date });
  const [itemsToShow, setItemsToShow] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(5);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const firstProductImageUrl = `http://www.kopis.or.kr${data[0].poster}`;
    }
  }, [data]);

  if (isLoading) {
    return (
      <S.SpinnerBox>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      </S.SpinnerBox>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.slice(0, itemsToShow);

  return (
    <S.WeeklyRankingSection>
      <S.WeeklyRankingBg></S.WeeklyRankingBg>
      <S.HeaderRanking>랭킹</S.HeaderRanking>
      <S.SubHeaderRanking>주간베스트</S.SubHeaderRanking>
      <S.ProductList>
        {products.map((product) => (
          <div key={product.id} onClick={() => goToDetailPage(product.mt20id)} style={{ cursor: 'pointer' }}>
            <WeeklyRankingCard products={[product]} />
          </div>
        ))}
      </S.ProductList>
    </S.WeeklyRankingSection>
  );
};

export default WeeklyRanking;
