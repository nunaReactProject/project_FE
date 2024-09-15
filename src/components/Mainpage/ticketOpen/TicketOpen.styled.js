import styled from 'styled-components';

export const TicketOpenContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TicketOpenWrap = styled.div`
  margin: 90px;
  width: 1120px;
  height: 331px;
`;

export const TicketOpenHeader = styled.div`
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

export const TicketOpenBox = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

export const TicketOpenItem = styled.div`
  width: 200px;
  cursor: pointer;
`;

export const TicketOpenImgBox = styled.div`
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
    object-fit: contain;
    transition: transform 0.3s ease;
    object-fit: contain;
  }

  &:hover > img {
    height: 247px;
    transform: scale(1.1);
  }
`;

export const TicketOpenTitle = styled.p`
  margin-top: 10px;
  font-size: 18px;
  width: 190px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TicketOpenDate = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #fa2828;
`;

export const AllViewText = styled.p`
  cursor: pointer;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1120px;
  height: 321px;
`;
