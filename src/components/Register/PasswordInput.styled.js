import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputBox = styled.div`
  display: flex;
  width: 500px;
  border-bottom: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
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

export const Warning = styled.p`
  font-size: 13px;
  color: red;
`;
