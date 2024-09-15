import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './WeeklyRanking.styled.js';
import WeeklyRankingCard from '../WeeklyRankingCard/WeeklyRankingCard.jsx';
import { useWeeklyRankProductQuery } from '../../../hooks/useWeeklyRankProductQuery.js';
import { Spinner } from '@chakra-ui/react';

const WeeklyRanking = ({ ststype, date }) => {
  const { data, isLoading, error } = useWeeklyRankProductQuery({ ststype, date });
  const canvasRef = useRef(null);
  const [bgColor, setBgColor] = useState('');
  const [colorCache, setColorCache] = useState({});
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

  useEffect(() => {}, [data]);

  const getAverageColor = (imageUrl) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let r = 0,
        g = 0,
        b = 0;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      const pixelCount = data.length / 4;
      r = Math.floor(r / pixelCount);
      g = Math.floor(g / pixelCount);
      b = Math.floor(b / pixelCount);

      setBgColor(`rgb(${r}, ${g}, ${b})`);
      setColorCache((prev) => ({ ...prev, [imageUrl]: `rgb(${r}, ${g}, ${b})` }));
    };

    img.onerror = (err) => {
      console.error('Error loading image:', err);
    };
  };

  const handleMouseEnter = (imageUrl) => {
    const fullImageUrl = `https://cors-anywhere.herokuapp.com/http://www.kopis.or.kr${imageUrl}`;
    if (colorCache[fullImageUrl]) {
      setBgColor(colorCache[fullImageUrl]);
    } else {
      getAverageColor(fullImageUrl);
    }
  };

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const firstProductImageUrl = `https://cors-anywhere.herokuapp.com/http://www.kopis.or.kr${data[0].poster}`;
      getAverageColor(firstProductImageUrl);
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
    <div>
      <S.WeeklyRankingSection>
        <S.WeeklyRankingBg style={{ backgroundColor: bgColor }}></S.WeeklyRankingBg>
        <S.HeaderRanking>랭킹</S.HeaderRanking>
        <S.SubHeaderRanking>주간베스트</S.SubHeaderRanking>
        <S.ProductList>
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => handleMouseEnter(product.poster)}
              onClick={() => goToDetailPage(product.mt20id)}
              style={{ cursor: 'pointer' }}>
              <WeeklyRankingCard products={[product]} />
            </div>
          ))}
        </S.ProductList>
      </S.WeeklyRankingSection>
      <canvas ref={canvasRef} style={{ display: 'none' }} width={1} height={1}></canvas>
    </div>
  );
};

export default WeeklyRanking;
