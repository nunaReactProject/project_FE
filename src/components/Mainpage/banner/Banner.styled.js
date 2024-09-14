import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const BannerContent = styled.div`
  font-weight: 700;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 100vw;
  height: 734px;
  object-fit: cover;
`;

export const BannerCategory = styled.p`
  font-size: 17px;
`;

export const BannerTitle = styled.h1`
  font-size: 45px;
`;

export const BannerPosters = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 20.8%;
  top: 75%;
  z-index: 2;
  overflow: hidden;
`;

export const BannerPosterItem = styled.img`
  width: 55px;
  height: 68px;
  border-radius: 6px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    border: 2px solid white;
    box-sizing: border-box;
    outline: none;
  }
`;

export const BannerPeriod = styled.p`
  font-weight: normal;
`;

export const BannerLocation = styled.p`
  font-weight: normal;
`;
