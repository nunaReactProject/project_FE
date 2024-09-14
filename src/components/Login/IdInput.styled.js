import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 430px;
  border-bottom: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-left: 10px;
`;

export const Title = styled.div`
  width: 100px;
  font-size: 15px;
  font-weight: 700;
  line-height: 30px;
  padding-left: 4px;
`;

export const Input = styled.input`
  width: 380px;
  border: none;
  outline: none;
  font-size: 15px;
  line-height: 30px;

  &::placeholder {
    color: #cccccf;
  }
`;

export const UserIcon = styled(FiUser)`
  color: #b399a6;
`;
