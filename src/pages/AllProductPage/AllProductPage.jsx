import React, { useState } from 'react';
import { format, subDays } from 'date-fns';
import { useRankProductQuery } from '../../hooks/useRankProduct';
import RankingCard from '../../components/AllProduct/RankingCard/RankingCard';
import RankingPeriod from '../../components/AllProduct/RankingPeriod/RankingPeriod';
import GenreRanking from '../../components/AllProduct/GenreRanking/GenreRanking';
import LocationRanking from '../../components/AllProduct/LocationRanking/LocationRanking';
import * as S from './AllProductPage.styled.js';

export default function AllProductPage() {
  const today = new Date();
  const initialDate = subDays(today, 2);
  const initialFormattedDate = format(initialDate, 'yyyyMMdd');

  const [ststype, setStstype] = useState('day');
  const [date, setDate] = useState(initialFormattedDate);
  const [catecode, setCatecode] = useState('GGGA');
  const [selectedCategory, setSelectedCategory] = useState('GGGA');
  const [area, setArea] = useState('');

  const { data, isLoading, error } = useRankProductQuery({ ststype, date, catecode, area });
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.slice(0, 20);

  return (
    <S.Container>
      <S.TypeRanking>
        <GenreRanking
          setCatecode={setCatecode}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <LocationRanking />
      </S.TypeRanking>
      <div>
        <RankingPeriod setStstype={setStstype} setDate={setDate} />
      </div>
      <div>
        <RankingCard products={products} />
      </div>
    </S.Container>
  );
}
