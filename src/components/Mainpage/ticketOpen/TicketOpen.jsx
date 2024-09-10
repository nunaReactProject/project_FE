import React from 'react';
import * as to from './TicketOpen.styled.js';
import { useTicketOpenQuery } from '../../../hooks/useTicketOpen';

const TicketOpen = () => {
  const { data } = useTicketOpenQuery();

  return (
    <to.TicketOpenContainer>
      <to.TicketOpenWrap>
        <to.TicketOpenHeader>
          <h1>티켓오픈</h1>
          <a href='#'>전체보기</a>
        </to.TicketOpenHeader>
        <to.TicketOpenBox>
          {data?.map((item, index) => (
            <to.TicketOpenItem key={index}>
              <to.TicketOpenImgBox>
                <img src={item.dbs.db.poster} alt={item.dbs.db.prfnm} />
              </to.TicketOpenImgBox>
              <to.TicketOpenTitle>{item.dbs.db.prfnm}</to.TicketOpenTitle>
              <to.TicketOpenDate>{item.dbs.db.dtguidance}</to.TicketOpenDate>
            </to.TicketOpenItem>
          ))}
        </to.TicketOpenBox>
      </to.TicketOpenWrap>
    </to.TicketOpenContainer>
  );
};

export default TicketOpen;
