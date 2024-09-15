import React from 'react';
import * as fp from './FullPerformance.styled.js';
import { useFullPerformanceQuery } from '../../../hooks/useFullPerformance.js';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

const FullPerformanceComponent = () => {
  const { data, isLoading } = useFullPerformanceQuery();
  const navigate = useNavigate();

  const onNavigateRaking = () => {
    navigate('/all');
  };

  const onNavigateDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderData = (data, isLoading) => {
    if (isLoading) {
      return (
        <fp.SpinnerContainer>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        </fp.SpinnerContainer>
      );
    }

    if (data && data.dbs && data.dbs.db) {
      return data.dbs.db.map((item, index) => (
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
      ));
    }
  };

  return (
    <fp.FullPerformanceContainer>
      <fp.FullPerformanceWrap>
        <fp.FullPerformanceHeader>
          <h1>전체 공연 예정</h1>
          <fp.AllViewText onClick={onNavigateRaking}>전체보기</fp.AllViewText>
        </fp.FullPerformanceHeader>
        <fp.FullPerformanceBox>{renderData(data, isLoading)}</fp.FullPerformanceBox>
      </fp.FullPerformanceWrap>
    </fp.FullPerformanceContainer>
  );
};

export default FullPerformanceComponent;
