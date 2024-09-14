import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  padding-top: 20px;
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 18px;
`;

export const Highlight = styled.div`
  width: 4px;
  height: 18px;
  background-color: ${({ highlight }) => (highlight ? '#0eade3' : 'white')};
`;

export const Content = styled.p`
  cursor: pointer;
`;
