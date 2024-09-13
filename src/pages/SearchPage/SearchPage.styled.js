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
  padding: 2rem 1rem;
  margin: 20px auto;
  box-sizing: border-box;
  & > form {
    margin: 20px auto;
  }
  & > form > input {
    margin-right: 5px;
    border: none;
    border-bottom: 1px solid #999;
    width: 330px;
    height: 28px;
    background: transparent;
    &:focus {
      outline: none; /* 포커스 시 기본 보더 제거 */
    }
  }
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
  column-gap: 10px;
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
  background-color: ${({ isActive }) => (isActive ? '#7848ca' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: 2px solid #7848ca;
  }
`;

export const Tickettxt = styled.div`
  line-height: 1.5;
  word-break: keep-all;
  font-size: 1.1rem;
  font-weight: 600;
  .ticket_place {
    font-weight: 500;
    font-size: 14px;
  }
  .ticket_period {
    font-weight: 400;
    font-size: 14px;
    color: #333;
  }
`;

export const Ticketbtn = styled.div``;
export const Maincontent = styled.div`
  display: grid;
  box-sizing: border-box;
  justify-content: space-between;
  column-gap: 10px;
  grid-template-columns: 300px 1fr;
  select {
    justify-self: right;
    height: 20px;
  }
  .data_plus_btn {
    width: 100%;
  }
`;

export const Filterbox = styled.div`
  grid-row: 1/3;
  border: 1px solid #ccc;
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  row-gap: 20px;
  padding: 1rem;
  width: 100%;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
  }
  label {
    margin-right: 10px;
  }
  .data_area {
    display: flex;
    flex-direction: column;
  }
  & > div {
    padding: 1rem 0;
    border-bottom: 1px solid lightgrey;
    &:last-child {
      border-bottom: none;
    }
  }
`;
