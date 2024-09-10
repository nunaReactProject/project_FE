import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
  background-color: #f8f9fa;
`;

export const Th = styled.th`
  color: #333;
  text-align: center;
  font-weight: bold;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  text-align: center;
`;

export const Button = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  width: 75px;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.span`
  img {
    max-height: 100px;
    width: auto;
    border-radius: 5px;
  }
`;
