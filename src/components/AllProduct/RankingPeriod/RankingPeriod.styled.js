import styled from 'styled-components';

export const StatusTypeList = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 0;
`;

export const StatusButton = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: color 0.3s;
`;

export const RankingReriod = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 42px;
  margin-bottom: 20px;
  margin-top: 32px;
`;

export const CalendarButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
`;
