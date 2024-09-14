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
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: color 0.3s;

  color: ${(props) => (props.isActive ? 'black' : '#a2a6b0')}; // props에 따라 색상 설정

  &:hover {
    color: black; // 호버 시 검정색으로 변경
  }
`;

export const TitleBar = styled.h1`
  font-size: 24px;
`;

export const RankingTab = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 30px;
`;
