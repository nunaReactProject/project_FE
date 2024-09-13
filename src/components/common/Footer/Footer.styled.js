import styled from 'styled-components';

export const TopLine = styled.div`
  width: 100vw;
  height: 1px;
  background-color: black;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 80px;
  width: 1120px;
  margin: auto;
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Content = styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: rgb(36, 36, 40);
`;

export const StrongContent = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  color: rgb(36, 36, 40);
  cursor: pointer;
`;

export const HeightLine = styled.div`
  font-size: 11px;
  color: #cfd0d7;
`;

export const InfoBox = styled.div`
  padding-top: 26px;
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.42px;
  line-height: 16px;
  padding-bottom: 12px;
`;

export const Description = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  letter-spacing: -0.42px;
  line-height: 16px;
  color: rgb(98, 103, 108);
`;

export const StrongDescription = styled.div`
  font-size: 12px;
  padding-top: 4px;
  font-weight: 700;
  padding-bottom: 4px;
  letter-spacing: -0.42px;
  line-height: 16px;
  color: rgb(98, 103, 108);

  cursor: pointer;
`;

export const DescriptionHeightLine = styled.div`
  font-size: 11px;
`;

export const BottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.div`
  color: rgb(167, 172, 182);
  font-size: 12px;
  letter-spacing: -0.48px;
  line-height: 16px;
`;

export const SocialBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialImg = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
`;
