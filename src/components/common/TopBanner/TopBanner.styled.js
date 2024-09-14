import styled from 'styled-components';
import { RiCloseLargeFill } from 'react-icons/ri';

export const Overlay = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6dcdc;
  cursor: pointer;
`;

export const BannerImage = styled.img``;

export const Close = styled(RiCloseLargeFill)`
  position: absolute;
  right: 50px;
  font-size: 40px;
  color: white;
`;
