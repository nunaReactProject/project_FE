import styled from 'styled-components';

export const WeeklyRankingSection = styled.section`
  height: 551px;
  overflow: hidden;
`;

export const WeeklyRankingBg = styled.div`
  height: 370px;
  width: 100vw;
  left: 0;
  position: absolute;
  background-color: rgb(184, 187, 190);
  z-index: -1;
`;

export const HeaderRanking = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 34px;
  padding-top: 64px;
  color: white;
`;

export const SubHeaderRanking = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: white;
`;

export const ProductList = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SpinnerBox = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
