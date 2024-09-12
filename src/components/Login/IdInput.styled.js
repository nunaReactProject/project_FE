import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  padding: 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const UserIcon = styled(FiUser)``;

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
