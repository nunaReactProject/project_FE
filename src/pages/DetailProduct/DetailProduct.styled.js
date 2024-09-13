import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export const detailPage = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  background: none;
  font-size: 26px;
  font-weight: 600;
  line-height: 34px;
  color: #242428;
  text-align: left;
  margin-top: ${(props) => (props.mt ? '25px' : null)};
`;

export const subTitle = styled.h2`
  padding-top: 2rem;
  margin-bottom: 15px;
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
`;

export const itemInfo = styled.li`
  display: flex;
  padding: 7px 0 6px;
  font-size: 15px;
  line-height: 22px;
  box-sizing: border-box;
`;

export const imgCard = styled.div`
  background-image: url(${(props) => props.imgURL});
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const calendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 450px;
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    background-color: white;
  }
`;

export const detailSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    padding-top: 2rem;
    margin-bottom: 15px;
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
  }
  h3 {
    align-items: left;
  }
  p {
    font-size: 15px;
    line-height: 22px;
    color: #62676c;
    font-weight: 600;
  }
`;

export const noticeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const infoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const tableDiv = styled.div`
  width: 100%;
  text-align: left;

  tbody tr th {
    background-color: #f8f9fa;
    font-weight: 500;
    padding: 15px;
    vertical-align: center;
  }

  td {
    font-weight: 500;
    padding: 15px;
  }
`;

export const colStyle = styled.col`
  width: ${(props) => props.width};
`;

export const rowStyle = styled.tr`
  td,
  th {
    border-top: ${(props) => (props.top ? `1px solid ${props.top}` : '')};
    border-bottom: 1px solid ${(props) => props.color};
  }
`;

export const flexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.map ? 'column' : null)};
  margin-top: ${(props) => (props.map ? '25px' : null)};
  margin-bottom: ${(props) => (props.map ? '25px' : null)};
  border-radius: ${(props) => (props.isborder ? '10px' : null)};
  border: ${(props) => (props.isborder ? ' 1px solid black' : null)};
  border-right: ${(props) => (props.borderR ? '1px solid #ecedf2' : null)};
  padding-left: ${(props) => (props.padding ? '13px' : null)};
  padding-right: ${(props) => (props.padding ? '13px' : null)};
`;

export const monthStep = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  h2 {
    margin-top: 10px;
  }
`;

export const timeBox = styled.div`
  border: 1px solid #242428;
  border-radius: 5px;
  padding: 11px 18px 11px 15px;
`;

export const timeStep = styled.div`
  margin-top: 10px;
`;

export const stepH = styled.h2`
  display: flex;
  flex-direction: column;
`;

export const seatBox = styled.div`
  background-color: #ecedf2;
  padding: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const locateP = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: #62676c;
`;

export const Button = styled.button`
  border: 1px solid #fa2828;
  background-color: #fa2828;
  color: #fff;
  height: 56px;
  font-size: 18px;
  font-weight: 700;
  margin-left: auto;
  margin-top: 2rem;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5rem;
  padding-right: 5rem;
  border-radius: 5px;
  transition: all 0.2s ease-out;

  &:hover {
    filter: brightness(130%);
    transform: scale(1.05);
  }
`;
