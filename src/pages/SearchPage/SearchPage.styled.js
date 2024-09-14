import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  width: 1120px;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;
export const Spinerbox = styled.div` 
position: absolute; z-index: 10; 
top: 50%; left: 50%;
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-radius: 50%;
  border-top-color: #7848ca;
  animation: spin 0.8s infinite ease-in-out;
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }`;

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
  & > form > Button {
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

    @media (max-width: 500px) {
      width: 60%;
    }
  }
`;

export const TicketUl = styled.ul`
  display: flex;
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
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

  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr auto;
  }
`;

export const Ticketimg = styled.div`
  box-sizing: border-box;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Button = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#7848ca' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 10px 15px;
  border-radius: 15px;
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
    justify-self: end;
    height: 20px;
  }

  .data_plus_btn {
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 모바일에서는 1열로 변경 */
  }
`;

export const Filterbox = styled.div`
  grid-row: 1/3;
  border: 1px solid #ccc;
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 2rem 1.5rem;
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
    row-gap: 10px;
  }

  & > div {
    padding: 1rem 0;
    border-bottom: 1px solid lightgrey;

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem; /* 모바일에서는 패딩 조정 */
  }
`;
