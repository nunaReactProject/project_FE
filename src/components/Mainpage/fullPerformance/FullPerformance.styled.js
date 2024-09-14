// FullPerformance.styled.js
import styled from 'styled-components';

export const FullPerformanceContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FullPerformanceWrap = styled.div`
  margin: 90px;
  width: 1120px;
  overflow: hidden;
`;

export const FullPerformanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    display: inline-block;
    color: #242428;
    font-size: 15px;
  }

  & > h1 {
    font-weight: 500;
    font-size: 32px;
    color: #242428;
  }
`;

export const FullPerformanceBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const FullPerformanceItem = styled.div`
  width: calc(25% - 20px);
  height: 444px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const FullPerformanceImgBox = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover > img {
    transform: scale(1.1);
  }
`;

export const FullPerformanceTitle = styled.p`
  margin-top: 10px;
  font-size: 18px;
`;

export const FullPerformanceDate = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #62676c;
`;

export const FullPerformanceLocation = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #62676c;
`;
