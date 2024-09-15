import React from 'react';
import * as to from './TicketOpen.styled.js';
import { useTicketOpenQuery } from '../../../hooks/useTicketOpen';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

const TicketOpen = () => {
  const { data, isLoading } = useTicketOpenQuery();
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
        <to.SpinnerContainer>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        </to.SpinnerContainer>
      );
    }

    if (data && data.dbs && data.dbs.db) {
      return data.dbs.db.map((item, index) => (
        <to.TicketOpenItem key={index} onClick={() => onNavigateDetailPage(item.mt20id)}>
          <to.TicketOpenImgBox>
            <img src={item.poster} alt={item.prfnm} />
          </to.TicketOpenImgBox>
          <to.TicketOpenTitle>{item.prfnm}</to.TicketOpenTitle>
          <to.TicketOpenDate>{item.dtguidance}</to.TicketOpenDate>
        </to.TicketOpenItem>
      ));
    }

    return <p>No data available</p>;
  };

  return (
    <to.TicketOpenContainer>
      <to.TicketOpenWrap>
        <to.TicketOpenHeader>
          <h1>티켓오픈</h1>
          <to.AllViewText onClick={onNavigateRaking}>전체보기</to.AllViewText>
        </to.TicketOpenHeader>
        <to.TicketOpenBox>{renderData(data, isLoading)}</to.TicketOpenBox>
      </to.TicketOpenWrap>
    </to.TicketOpenContainer>
  );
};

export default TicketOpen;
