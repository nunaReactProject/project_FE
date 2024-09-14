import React from 'react';
import { categoryMappings } from '../../../constants/categories';
import * as S from './GenreRanking.styled';

const GenreRanking = ({ setCatecode, catecode }) => {
  const categories = categoryMappings;

  const changeCategory = (code) => {
    setCatecode(code);
  };

  return (
    <S.RankingDiv>
      <S.ButtonContainer>
        {categories.map((category) => (
          <S.CategoryItem
            type='button'
            key={category.code}
            onClick={(e) => {
              e.preventDefault();
              changeCategory(category.code);
            }}
            isSelected={catecode === category.code ? 'select' : 'nonselect'}>
            {category.name}
          </S.CategoryItem>
        ))}
      </S.ButtonContainer>
    </S.RankingDiv>
  );
};

export default GenreRanking;
