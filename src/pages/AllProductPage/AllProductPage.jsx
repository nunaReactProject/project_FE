import React, { useEffect, useState } from 'react';
import { format, subDays } from 'date-fns';
import { useRankProductQuery } from '../../hooks/useRankProductQuery';
import RankingCard from '../../components/AllProduct/RankingCard/RankingCard';
import RankingPeriod from '../../components/AllProduct/RankingPeriod/RankingPeriod';
import GenreRanking from '../../components/AllProduct/GenreRanking/GenreRanking';
import LocationRanking from '../../components/AllProduct/LocationRanking/LocationRanking';
import * as S from './AllProductPage.styled.js';
import WeeklyRanking from '../../components/AllProduct/WeeklyRanking/WeeklyRanking.jsx';
import { Spinner } from '@chakra-ui/react';

export default function AllProductPage() {
  const today = new Date();
  const initialDate = subDays(today, 2);
  const initialFormattedDate = format(initialDate, 'yyyyMMdd');

  const [ststype, setStstype] = useState('day');
  const [date, setDate] = useState(initialFormattedDate);
  const [catecode, setCatecode] = useState('');
  const [area, setArea] = useState();
  const [activeRanking, setActiveRanking] = useState('genre');

  const weeklyDate = format(today, 'yyyyMMdd');

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

  const products = data?.slice(0, 20);

  const GenreClick = () => {
    setActiveRanking('genre');
  };

  const LocationClick = () => {
    setActiveRanking('location');
  };

  if (isLoading) {
    return (
      <S.SpinnerBox>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      </S.SpinnerBox>
    );
  }

  return (
    <S.RankingContainer>
      <WeeklyRanking ststype={'week'} date={weeklyDate} />
      <S.RankingTab>
        <S.Title onClick={GenreClick} isActive={activeRanking === 'genre'}>
          장르별랭킹
        </S.Title>
        <S.TitleBar>|</S.TitleBar>
        <S.Title onClick={LocationClick} isActive={activeRanking === 'location'}>
          지역별랭킹
        </S.Title>
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
