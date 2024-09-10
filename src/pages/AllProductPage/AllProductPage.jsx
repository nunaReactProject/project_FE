import React from 'react';
import { useRankProductQuery } from '../../hooks/useRankProduct';
import RankCard from '../../components/AllProduct/RankCard/RankCard';

export default function AllProductPage() {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}${month}${day}`;

  const { data, isLoading, error } = useRankProductQuery({ ststype: 'day', date: formattedDate });
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data.slice(0, 20);

  return (
    <div>
      <div>장르별랭킹지역별랭킹</div>
      <div>날짜선택</div>
      <div>
        <RankCard products={products} />
      </div>
    </div>
  );
}
