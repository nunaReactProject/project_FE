import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export const detailPage = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const mainSection = styled.section`
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const mainInfo = styled.div`
  margin-left: 2rem;
  width: 60%;
`;

export const titleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export const infoDesc = styled.div`
  flex: 1;
  color: #242428;
`;

export const infoLabel = styled.span`
  width: 70px;
  margin-right: 10px;
  color: #62676c;
`;

export const titleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export const Title = styled.h1`
  background: none;
  font-size: 26px;
  font-weight: 600;
  line-height: 34px;
  color: #242428;
  text-align: left;
  margin-top: ${(props) => (props.mt ? '25px' : null)};
  margin-bottom: ${(props) => (props.mb ? '15px' : null)};
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
  width: 100%;
  .react-calendar {
    width: 100%;
    padding: 3% 3%;
    border: none;
    border-radius: 0.5rem;
    background-color: white;
  }
  //전체 캘린더 폰트 컬러
  .react-calendar__month-view {
    abbr {
      color: #a7acb6;
    }
  }
  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 20px;
  }
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title='일요일'] {
    color: red;
  }

  .react-calendar__navigation {
    justify-content: center;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: black;
  }
  .react-calendar__navigation button:disabled {
    background-color: white;
  }
  //요일 밑줄 제거
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: black;
    > abbr {
      color: white;
    }
    font-weight: 900;
    border-radius: 30%;
  }
  .react-calendar__tile:enabled:hover {
    background-color: transparent;
    > abbr {
      color: black;
    }
    font-weight: 900;
    border-radius: 30%;
    border: 1px solid black;
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: black;
      font-weight: 800;
    }
  }

  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }
`;

export const shareButton = styled.button`
  background: transparent;
  border: none;
  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.1);
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
  h2 {
    align-items: left;
  }
  img {
    height: 80%;
    margin-bottom: 4rem;
  }
`;

export const infoSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
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
  padding: ${(props) => (props.padding ? '13px' : null)};
  //calendar 부분넓이 설정
  width: ${(props) => (props.calender ? '45%' : null)};
  //전체 화면 설정
  width: ${(props) => (props.width ? '100%' : null)};
  flex-direction: ${(props) => (props.width ? 'column' : null)};
  justify-content: ${(props) => (props.width ? '100%' : null)};
  align-items: ${(props) => (props.width ? 'center' : null)};
  margin-top: ${(props) => (props.width ? '4rem' : null)};
  //
  //결제 버튼 박스
  width: ${(props) => (props.book ? '100%' : null)};
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
  > h2:first-child > span:first-child {
    font-weight: 700;
  }
  > h2:first-child {
    margin-bottom: 4px;
  }
`;

export const timeStep = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const stepH = styled.h2`
  display: flex;
  flex-direction: column;
  > span:first-child {
    color: #fa2828;
    display: block;
    margin-bottom: 4px;
  }
  > span:nth-child(2) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: black;
  }
`;

export const seatBox = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  width: 260px;
  flex-direction: column;
  > h3 {
    font-weight: 600;
    margin-bottom: 15px;
  }

  ul li {
    display: flex;
    justify-content: space-between;
    color: #62676c;
    margin-bottom: 5px;
  }

  ul li span:nth-child(2) {
    color: #242428;
    font-weight: 700;
  }
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
    filter: brightness(60%);
    transform: scale(1.05);
  }
`;

export const underLine1 = styled.hr`
  background-color: #2b2a2a;
`;

export const underLine2 = styled.hr`
  background: hsl(240, 6%, 87%);
  font-size: bold;
  height: 0.8px;
  border: 0;
`;
