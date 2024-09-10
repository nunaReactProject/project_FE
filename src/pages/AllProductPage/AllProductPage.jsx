import React, { useState } from 'react';
import { useRankProductQuery } from '../../hooks/useRankProduct';
import RankingCard from '../../components/AllProduct/RankingCard/RankingCard';
import RankingPeriod from '../../components/AllProduct/RankingPeriod/RankingPeriod';
import Container from './AllProductPage.styled';

export default function AllProductPage() {
  const today = new Date();
  today.setDate(today.getDate() - 2);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const initialFormattedDate = `${year}${month}${day}`;

  const [ststype, setStstype] = useState('day');
  const [date, setDate] = useState(initialFormattedDate);
  const { data, isLoading, error } = useRankProductQuery({ ststype, date: date });
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.slice(0, 20);

  return (
    <Container>
      <div>장르별랭킹지역별랭킹</div>
      <div>
        <RankingPeriod setStstype={setStstype} setDate={setDate} />
      </div>
      <div>
        <RankingCard products={products} />
      </div>
    </Container>
  );
}
