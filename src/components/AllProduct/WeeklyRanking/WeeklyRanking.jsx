import React, { useEffect, useState, useRef } from 'react';
import * as S from './WeeklyRanking.styled.js';
import { useRankProductQuery } from '../../../hooks/useRankProduct.js';
import WeeklyRankingCard from '../WeeklyRankingCard/WeeklyRankingCard.jsx';

const WeeklyRanking = ({ ststype, date, catecode = '', area = '' }) => {
  const { data, isLoading, error } = useRankProductQuery({ ststype, date, catecode, area });
  const canvasRef = useRef(null);
  const [bgColor, setBgColor] = useState('');
  const [colorCache, setColorCache] = useState({});
  console.log(colorCache);

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

  useEffect(() => {
    if (data && data.length > 0) {
      const firstProductImageUrl = `https://cors-anywhere.herokuapp.com/http://www.kopis.or.kr${data[0].poster}`;
      getAverageColor(firstProductImageUrl);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.slice(0, 5);

  return (
    <div>
      <S.WeeklyRankingSection>
        <S.WeeklyRankingBg style={{ backgroundColor: bgColor }}></S.WeeklyRankingBg>
        <S.HeaderRanking>랭킹</S.HeaderRanking>
        <S.SubHeaderRanking>주간베스트</S.SubHeaderRanking>
        <S.ProductList>
          {products.map((product) => (
            <div key={product.id} onMouseEnter={() => handleMouseEnter(product.poster)}>
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
