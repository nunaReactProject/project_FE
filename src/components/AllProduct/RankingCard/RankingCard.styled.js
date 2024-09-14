import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  padding: 15px 10px;
  border-bottom: 1px solid #ecedf2;
  border-top: 1px solid black;
  font-size: 15px;
  font-weight: normal;

  & > tr > th {
    color: #62676c;
  }
`;

export const Th = styled.th`
  vertical-align: middle;
  height: 53px;

  @media (max-width: 768px) {
    &:nth-child(4) {
      display: none;
    }
  }
`;

export const Td = styled.td`
  text-align: center;
  vertical-align: middle;
  height: 53px;
`;

export const Tbody = styled.tbody`
  & > tr {
    height: 133px;
    padding: 14px 10px;
    border-bottom: 1px solid #ecedf2;
  }
`;

export const Tr = styled.tr`
  height: 53px;
`;

export const ReserveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  width: 110px;
  height: 42px;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

export const ReserveStatus = styled.button`
  background-color: #e0e2e5;
  color: #a2a6b0;
  border: none;
  width: 110px;
  height: 42px;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s;
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const ImageContainer = styled.span`
  display: inline-block;
  overflow: hidden;
  width: 84px; /* 고정된 너비 */
  height: 104px; /* 고정된 높이 */
  border-radius: 5px;

  img {
    width: 84px; /* 고정된 너비 */
    height: 104px; /* 고정된 높이 */
    transition: transform 0.3s;
    border-radius: 5px;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const RankingProductSideInfo = styled.td`
  text-align: center;
  vertical-align: middle;
  color: #62676c;
`;

export const RankingProductCategory = styled.td`
  text-align: center;
  vertical-align: middle;
  color: #62676c;

  @media (max-width: 768px) {
    display: none; /* 장르 열 숨기기 */
  }
`;

export const SpinnerBox = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
