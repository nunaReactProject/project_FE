import styled from 'styled-components';

export const RankingContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const TypeRanking = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: color 0.3s;
  color: ${(props) => (props.isActive ? 'black' : '#a2a6b0')};

  &:hover {
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleBar = styled.h1`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const RankingTab = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 30px;
`;

export const SpinnerBox = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
