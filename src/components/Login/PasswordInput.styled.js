import styled from 'styled-components';
import { CiLock } from 'react-icons/ci';

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-top-width: 0px;
  border-style: solid;
  border-color: #dddddd;
  padding: 15px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const UserIcon = styled(CiLock)``;

export const Input = styled.input`
  width: 300px;
  font-size: 15px;
  margin-left: 14px;
  height: 24px;
  border: none;
  outline: none;

  &::placeholder {
    font-size: 15px;
    color: #b399a6;
  }
`;
