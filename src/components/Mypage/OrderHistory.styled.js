import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const TabTitle = styled.p`
  font-size: 24px;

  padding-bottom: 40px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductBox = styled.div`
  width: 980px;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
  }
`;

export const Poster = styled.img`
  width: 100px;
  height: 125px;
`;

export const ContentBox = styled.div`
  font-size: 14px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding-left: 12px;
`;

export const Hr = styled.hr``;

export const Title = styled.p``;

export const Day = styled.p``;

export const Time = styled.p``;

export const Location = styled.p``;

export const Company = styled.p``;

export const CancelButton = styled.button`
  height: fit-content;
  margin-left: auto;
  padding: 4px 8px;
  border: 1px solid black;
  margin-right: 70px;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const ReactPaginateStyle = styled(ReactPaginate).attrs({
  activeClassName: 'activePage'
})`
  display: flex;
  justify-content: center;
  /* gap: 12px; */
  font-size: 24px;
  font-family: proxima-nova;

  padding-top: 20px;

  .activePage a {
    color: #1a74c0;
    font-size: 24px;
    padding: 8px 12px;
    border-radius: 5px;
  }

  li a {
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }

  li a:hover {
    color: #1a74c0;
  }
`;
