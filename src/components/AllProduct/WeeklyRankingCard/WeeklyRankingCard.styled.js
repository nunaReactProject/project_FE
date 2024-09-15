import styled from 'styled-components';

export const ProductList = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ProductItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  width: 200px;
  position: relative;
`;

export const ProductImgContainer = styled.div`
  width: 200px;
  height: 260px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;

  @media (max-width: 768px) {
    width: 180px;
    height: 220px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.3s;

  ${ProductImgContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductRank = styled.span`
  position: absolute;
  bottom: -14px;
  left: 10px;
  font-size: 56px;
  font-weight: 700;
  color: white;
  z-index: 2;
`;

export const ProductInfo = styled.div`
  margin-top: 16px;
  font-size: 13px;
  line-height: 22px;
`;

export const TitleInfo = styled.span`
  font-size: 16px;
  width: 190px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 170px;
  }
`;

export const PeriodInfo = styled.span`
  color: #62676c;
`;
