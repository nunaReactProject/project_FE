import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

export const Container = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 18px 0;
`;

export const Logo = styled.h1`
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
`;

export const SearchBox = styled.div`
  width: 220px;
  height: 38px;
  border: 1px solid #e2e3e6;
  border-radius: 20px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SearchInput = styled.input`
  max-width: 150px;
  outline: none;
  border: none;
  font-size: 14px;

  &::placeholder {
    color: #a7acc6;
  }
`;

export const SearchIcon = styled(CiSearch)`
  cursor: pointer;
`;
