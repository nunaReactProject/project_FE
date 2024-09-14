import React from 'react';
import * as fp from './FullPerformance.styled.js';
import { useFullPerformanceQuery } from '../../../hooks/useFullPerformance.js';
import { useNavigate } from 'react-router-dom';

const FullPerformanceComponent = () => {
  const { data } = useFullPerformanceQuery();
  const navigate = useNavigate();

  const onNavigateRaking = () => {
    navigate('/all');
  };

  const onNavigateDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <fp.FullPerformanceContainer>
      <fp.FullPerformanceWrap>
        <fp.FullPerformanceHeader>
          <h1>전체 공연 예정</h1>
          <fp.AllViewText onClick={onNavigateRaking}>전체보기</fp.AllViewText>
        </fp.FullPerformanceHeader>
        <fp.FullPerformanceBox>
          {data?.dbs.db.map((item, index) => {
            console.log(item);
            return (
              <fp.FullPerformanceItem key={index} onClick={() => onNavigateDetailPage(item.mt20id)}>
                <fp.FullPerformanceImgBox>
                  <img src={item.poster} alt={item.prfnm} />
                </fp.FullPerformanceImgBox>
                <fp.FullPerformanceTitle>{item.prfnm}</fp.FullPerformanceTitle>
                <fp.FullPerformanceLocation>{item.fcltynm}</fp.FullPerformanceLocation>
                <fp.FullPerformanceDate>
                  {item.prfpdfrom}~{item.prfpdto}
                </fp.FullPerformanceDate>
              </fp.FullPerformanceItem>
            );
          })}
        </fp.FullPerformanceBox>
      </fp.FullPerformanceWrap>
    </fp.FullPerformanceContainer>
  );
};

export default FullPerformanceComponent;
