import styled from 'styled-components';

export const DetailTab = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  margin-top: 2rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const TabButton = styled.button`
  width: 280px;
  height: 50px;
  background-color: transparent;
  border-top: ${(props) => (props.active ? '1px solid #24242' : '1px solid #ecedf2')};
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #24242')};
  border-right: ${(props) => (props.active ? '1px solid #24242' : '1px solid #ecedf2')};
  border-left: ${(props) => (props.active ? '1px solid #24242' : '1px solid #ecedf2')};
  color: ${(props) => (props.active ? 'black' : null)};
  font-weight: ${(props) => (props.active ? '900' : null)};
`;

export const DisableButton = styled.button`
  width: 280px;
  height: 50px;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: '1px solid #24242';
`;
