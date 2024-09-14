import React from 'react';
import * as fp from './FullPerformance.styled.js';
import { useFullPerformanceQuery } from '../../../hooks/useFullPerformance.js';

const FullPerformanceComponent = () => {
  const { data } = useFullPerformanceQuery();

  return (
    <fp.FullPerformanceContainer>
      <fp.FullPerformanceWrap>
        <fp.FullPerformanceHeader>
          <h1>전체 공연 예정</h1>
          <a href='#'>전체보기</a>
        </fp.FullPerformanceHeader>
        <fp.FullPerformanceBox>
          {data?.dbs.db.map((item, index) => (
            <fp.FullPerformanceItem key={index}>
              <fp.FullPerformanceImgBox>
                <img src={item.poster} alt={item.prfnm} />
              </fp.FullPerformanceImgBox>
              <fp.FullPerformanceTitle>{item.prfnm}</fp.FullPerformanceTitle>
              <fp.FullPerformanceLocation>{item.fcltynm}</fp.FullPerformanceLocation>
              <fp.FullPerformanceDate>
                {item.prfpdfrom}~{item.prfpdto}
              </fp.FullPerformanceDate>
            </fp.FullPerformanceItem>
          ))}
        </fp.FullPerformanceBox>
      </fp.FullPerformanceWrap>
    </fp.FullPerformanceContainer>
  );
};

export default FullPerformanceComponent;
