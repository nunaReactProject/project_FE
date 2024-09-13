import React, { useEffect, useState } from 'react';
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
  const [area, setArea] = useState(11);
  const [activeRanking, setActiveRanking] = useState('genre');

  const { data, isLoading, error } = useRankProductQuery({ ststype, date, catecode, area });

  useEffect(() => {
    if (activeRanking === 'genre') {
      setCatecode('GGGA');
      setArea('');
    } else if (activeRanking === 'location') {
      setArea('11');
      setCatecode('');
    }
  }, [activeRanking]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.slice(0, 20);

  const GenreClick = () => {
    setActiveRanking('genre');
  };

  const LocationClick = () => {
    setActiveRanking('location');
  };

  return (
    <S.RankingContainer>
      <S.RankingTab>
        <S.Title onClick={GenreClick}>장르별랭킹 |</S.Title>
        <S.Title onClick={LocationClick}>지역별랭킹</S.Title>
      </S.RankingTab>
      <S.TypeRanking>
        {activeRanking === 'genre' && <GenreRanking setCatecode={setCatecode} catecode={catecode} />}
        {activeRanking === 'location' && <LocationRanking setArea={setArea} area={area} />}
      </S.TypeRanking>
      <div>
        <RankingPeriod setStstype={setStstype} setDate={setDate} />
      </div>
      <div>
        <RankingCard products={products} />
      </div>
    </S.RankingContainer>
  );
}
