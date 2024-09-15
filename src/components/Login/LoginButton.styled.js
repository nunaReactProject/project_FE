import styled from 'styled-components';

export const Button = styled.div`
  width: 430px;
  color: white;
  margin-top: 21px;
  background-color: ${({ buttonState }) => (buttonState ? '#1A74C0' : '#cccccc')};
  border-radius: 15px;
  padding: 15px 16px;
  text-align: center;

  cursor: pointer;
`;

export const Warning = styled.p`
  font-size: 13px;
  color: red;
`;
