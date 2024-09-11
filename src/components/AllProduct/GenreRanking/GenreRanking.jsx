import React, { useState } from 'react';
import { categoryMappings } from '../../../pages/AllProductPage/categories';
import * as S from './GenreRanking.styled';

const GenreRanking = ({ setCatecode, selectedCategory, setSelectedCategory }) => {
  const categories = categoryMappings;

  const changeCategory = (code) => {
    setSelectedCategory(code);
    setCatecode(code);
  };

  return (
    <S.RankingDiv>
      <S.Title>장르별 랭킹</S.Title>
      <S.ButtonContainer>
        {categories.map((category) => (
          <S.CategoryItem
            type='button'
            key={category.code}
            onClick={() => changeCategory(category.code)}
            isSelected={selectedCategory === category.code ? 'select' : 'nonselect'}>
            {category.name}
          </S.CategoryItem>
        ))}
      </S.ButtonContainer>
    </S.RankingDiv>
  );
};

export default GenreRanking;
