import React from 'react';
import * as to from './TicketOpen.styled.js';
import { useTicketOpenQuery } from '../../../hooks/useTicketOpen';
import { useNavigate } from 'react-router-dom';

const TicketOpen = () => {
  const { data } = useTicketOpenQuery();

  const navigate = useNavigate();

  const onNavigateDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <to.TicketOpenContainer>
      <to.TicketOpenWrap>
        <to.TicketOpenHeader>
          <h1>티켓오픈</h1>
          <a href='#'>전체보기</a>
        </to.TicketOpenHeader>
        <to.TicketOpenBox>
          {data?.dbs?.db.map((item, index) => (
            <to.TicketOpenItem key={index} onClick={() => onNavigateDetailPage(item.mt20id)}>
              <to.TicketOpenImgBox>
                <img src={item.poster} alt={item.prfnm} />
              </to.TicketOpenImgBox>
              <to.TicketOpenTitle>{item.prfnm}</to.TicketOpenTitle>
              <to.TicketOpenDate>{item.dtguidance}</to.TicketOpenDate>
            </to.TicketOpenItem>
          ))}
        </to.TicketOpenBox>
      </to.TicketOpenWrap>
    </to.TicketOpenContainer>
  );
};

export default TicketOpen;
