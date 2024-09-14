import styled from 'styled-components';

export const KidTicketOpenContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 450px;
`;

export const KidTicketOpenWrap = styled.div`
  width: 1120px;
`;

export const KidTicketOpenHeader = styled.div`
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

export const KidTicketOpenBox = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

export const KidTicketOpenItem = styled.div`
  width: 200px;
  cursor: pointer;
`;

export const KidTicketOpenImgBox = styled.div`
  width: inherit;
  height: 247px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover > img {
    height: 247px;
    transform: scale(1.1);
  }
`;

export const KidTicketOpenTitle = styled.p`
  margin-top: 10px;
  font-size: 18px;
`;

export const KidTicketOpenDate = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #fa2828;
`;
