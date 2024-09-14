import styled from 'styled-components';

export const StatusTypeList = styled.ul`
  display: flex;
  gap: 14px;
  position: absolute;
  right: 0;
  padding: 0;
  margin: 0;
`;

export const StatusLi = styled.li`
  margin: 0 !important;
  padding: 0;
  list-style: ${(props) => (props.isSelected ? 'disc' : 'none')};
`;

export const StatusButton = styled.button`
  background: none;
  border: none;
  padding: 9px 10px;
  cursor: pointer;
  transition: color 0.3s;
  color: ${(props) => (props.isSelected ? 'black' : '#a2a6b0')};

  &:hover {
    color: black;
  }
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
  font-size: 26px;
  color: #333;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
`;

export const CalenderArea = styled.span`
  cursor: pointer;
`;
