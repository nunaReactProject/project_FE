import React from 'react';
import * as to from './TicketOpen.styled.js';
import { useTicketOpenQuery } from '../../../hooks/useTicketOpen';

const TicketOpen = () => {
  const { data } = useTicketOpenQuery();
  const date = ['09.19(목) 18:00', '09.20(금) 20:00', '09.23(월) 17:00', '09.23(월) 19:00', '09.23(월) 20:00'];

  return (
    <to.TicketOpenContainer>
      <to.TicketOpenWrap>
        <to.TicketOpenHeader>
          <h1>티켓오픈</h1>
          <a href='#'>전체보기</a>
        </to.TicketOpenHeader>
        <to.TicketOpenBox>
          {data?.dbs.db.map((item, index) => (
            <to.TicketOpenItem key={index}>
              <to.TicketOpenImgBox>
                <img src={item.poster} alt={item.prfnm} />
              </to.TicketOpenImgBox>
              <to.TicketOpenTitle>{item.prfnm}</to.TicketOpenTitle>
              <to.TicketOpenDate>{date[index]}</to.TicketOpenDate>
            </to.TicketOpenItem>
          ))}
        </to.TicketOpenBox>
      </to.TicketOpenWrap>
    </to.TicketOpenContainer>
  );
};

export default TicketOpen;
