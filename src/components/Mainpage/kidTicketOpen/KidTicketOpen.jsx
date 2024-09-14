import React from 'react';
import * as ko from './KidTicketOpen.styled.js';
import { useKidTicketOpenQuery } from '../../../hooks/useKidTicketOpen';
import { useNavigate } from 'react-router-dom';

const KidTicketOpen = () => {
  const { data } = useKidTicketOpenQuery();

  const navigate = useNavigate();

  const onNavigateRaking = () => {
    navigate('/all');
  };

  const onNavigateDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  const date = ['09.17(화) 20:00', '09.21(토) 22:00', '09.22(일) 16:00', '09.23(월) 19:00', '09.24(화) 17:00'];
  return (
    <ko.KidTicketOpenContainer>
      <ko.KidTicketOpenWrap>
        <ko.KidTicketOpenHeader>
          <h1>키즈 티켓 오픈</h1>
          <ko.AllViewText onClick={onNavigateRaking}>전체보기</ko.AllViewText>
        </ko.KidTicketOpenHeader>
        <ko.KidTicketOpenBox>
          {data?.dbs.db.map((item, index) => (
            <ko.KidTicketOpenItem key={index} onClick={() => onNavigateDetailPage(item.mt20id)}>
              <ko.KidTicketOpenImgBox>
                <img src={item.poster} alt={item.prfnm} />
              </ko.KidTicketOpenImgBox>
              <ko.KidTicketOpenTitle>{item.prfnm}</ko.KidTicketOpenTitle>
              <ko.KidTicketOpenDate>{date[index]}</ko.KidTicketOpenDate>
            </ko.KidTicketOpenItem>
          ))}
        </ko.KidTicketOpenBox>
      </ko.KidTicketOpenWrap>
    </ko.KidTicketOpenContainer>
  );
};

export default KidTicketOpen;
