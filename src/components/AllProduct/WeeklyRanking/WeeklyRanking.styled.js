import styled from 'styled-components';

export const WeeklyRankingSection = styled.section`
  height: 551px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 500px;
  }
`;

export const WeeklyRankingBg = styled.div`
  height: 370px;
  width: 100vw;
  left: 0;
  position: absolute;
  background-color: rgb(184, 187, 190);
  z-index: -1;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const HeaderRanking = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 34px;
  padding-top: 64px;
  color: white;

  @media (max-width: 768px) {
    font-size: 30px;
    padding-top: 30px;
    margin-bottom: 20px;
  }
`;

export const SubHeaderRanking = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProductList = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  margin: 20px, 0px;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0px;
  }
`;

export const SpinnerBox = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
