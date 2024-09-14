import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100% !important;
  height: 560px !important;
  display: flex !important;
  justify-content: center !important;
  cursor: pointer;
  background-color: ${(props) => props.bgColor} !important;
  color: ${(props) => {
    switch (props.bgColor) {
      case '#f7f7f7':
        return 'black';
      default:
        return 'white';
    }
  }} !important;
`;

export const BannerWrap = styled.div`
  width: 1120px !important;
  height: inherit !important;
  display: flex !important;
`;

export const BannerContent = styled.div`
  width: 55% !important;
  margin: 70px 0 !important;
  font-weight: 700 !important;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 45% !important;
  height: inherit;
`;

export const BannerCategory = styled.p`
  font-size: 17px !important;
`;

export const BannerTitle = styled.h1`
  margin: 13px 0 40px 0 !important;
  font-size: 45px !important;
  line-height: 1.4;
`;

export const BannerPosters = styled.div`
  display: flex !important;
  width: 100% !important;
  gap: 10px !important;
  position: fixed;
  top: 77%;
  z-index: 2 !important;
  overflow: hidden !important;
`;

export const BannerPosterItem = styled.img`
  width: 55px !important;
  height: 68px !important;
  border-radius: 6px !important;
  cursor: pointer !important;
  &:hover {
    border: 2px solid white !important;
    box-sizing: border-box;
    outline: none;
  }
`;

export const BannerPeriod = styled.p`
  margin-bottom: 5px !important;
  font-weight: normal;
`;

export const BannerLocation = styled.p`
  font-weight: normal;
`;
