import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
`;

export const CheckOff = styled(FaRegCheckCircle)`
  font-size: 24px;
  color: #cccccc;
  cursor: pointer;
`;

export const CheckOn = styled(FaCheckCircle)`
  font-size: 24px;
  color: blue;
  cursor: pointer;
`;

export const SpamText = styled.div`
  font-size: 13px;
`;

export const Description = styled.p`
  padding: 25px 0;
  font-size: 13px;
`;
