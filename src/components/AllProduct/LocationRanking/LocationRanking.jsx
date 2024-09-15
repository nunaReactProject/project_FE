import React from 'react';
import { regionMappings } from '../../../constants/categories';
import * as S from './LocationRanking.styled';

const LocationRanking = ({ setArea, area }) => {
  const categories = regionMappings;

  const changeCategory = (code) => {
    setArea(code);
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
            isSelected={area === category.code ? 'select' : 'nonselect'}>
            {category.name}
          </S.CategoryItem>
        ))}
      </S.ButtonContainer>
    </S.RankingDiv>
  );
};

export default LocationRanking;
