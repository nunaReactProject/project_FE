import styled, { css } from 'styled-components';

export const RankingDiv = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CategoryItem = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #dcdde1;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    border: 1px solid black;
  }

  ${({ isSelected }) =>
    isSelected === 'select' &&
    css`
      background-color: black;
      color: white;
    `}
`;
