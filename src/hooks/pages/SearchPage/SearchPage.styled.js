import styled from 'styled-components';

export const Container = styled.div`
  width: 1120px;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
`;
export const Searchbox = styled.div`
  text-align: center;
  width: 100%;
  background-color: #f6f6f6;
  padding: 1rem;
  margin: 20px auto;
  box-sizing: border-box;
`;
export const TicketUl = styled.ul`
  display: flex;
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;
  flex-direction: column;
`;
export const TicketLi = styled.li`
  display: grid;
  padding: 1rem 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  column-gap: 5x;
  grid-template-columns: 110px 1fr auto;
  border-bottom: 1px solid lightgrey;
  &:last-child {
    border-bottom: none;
  }
`;

export const Ticketimg = styled.div`
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: #fff;
  color: #333;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;

  &.on {
    background-color: green; // 'on' 클래스가 있을 때의 배경색
  }
`;

export const Tickettxt = styled.div``;

export const Ticketbtn = styled.div``;
export const Maincontent = styled.div`
  display: grid;
  box-sizing: border-box;
  justify-content: space-between;
  column-gap: 10px;
  grid-template-columns: 300px auto;
`;

export const Filterbox = styled.div`
  border: 1px solid #ccc;
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  row-gap: 20px;
  padding: 1rem;
  width: 100%;
  flex-direction: column;

  & > div {
    padding: 1rem 0;
    border-bottom: 1px solid lightgrey;
    &:last-child {
      border-bottom: none;
    }
  }
`;
