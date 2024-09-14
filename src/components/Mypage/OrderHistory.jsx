import React from 'react';
import * as S from './OrderHistory.styled';

export default function OrderHistory() {
  return (
    <S.Container>
      <S.TabTitle>주문내역</S.TabTitle>
      <S.ProductWrapper>
        <S.Hr />
        <S.ProductBox>
          <S.Poster src='http://www.kopis.or.kr/upload/pfmPoster/PF_PF249007_240912_144044.png' />
          <S.ContentBox>
            <S.Title>어반자카파 전국투어 콘서트, 열다섯 번째: 겨울 [광주]</S.Title>
            <S.Day>2024.11.16 19시 30분 &nbsp; | &nbsp; 2시간</S.Day>
            <S.Location>예술의 전당 [광주] (구. 광주문화예술회관) (대극장)</S.Location>
          </S.ContentBox>
          <S.CancelButton>예매 취소</S.CancelButton>
        </S.ProductBox>
        <S.Hr />
        <S.ProductBox>
          <S.Poster src='http://www.kopis.or.kr/upload/pfmPoster/PF_PF249007_240912_144044.png' />
          <S.ContentBox>
            <S.Title>어반자카파 전국투어 콘서트, 열다섯 번째: 겨울 [광주]</S.Title>
            <S.Day>2024.11.16 19시 30분 &nbsp; | &nbsp; 2시간</S.Day>
            <S.Location>예술의 전당 [광주] (구. 광주문화예술회관) (대극장)</S.Location>
          </S.ContentBox>
          <S.CancelButton>예매 취소</S.CancelButton>
        </S.ProductBox>
        <S.Hr />
        <S.ProductBox>
          <S.Poster src='http://www.kopis.or.kr/upload/pfmPoster/PF_PF249007_240912_144044.png' />
          <S.ContentBox>
            <S.Title>어반자카파 전국투어 콘서트, 열다섯 번째: 겨울 [광주]</S.Title>
            <S.Day>2024.11.16 19시 30분 &nbsp; | &nbsp; 2시간</S.Day>
            <S.Location>예술의 전당 [광주] (구. 광주문화예술회관) (대극장)</S.Location>
          </S.ContentBox>
          <S.CancelButton>예매 취소</S.CancelButton>
        </S.ProductBox>
        <S.Hr />
      </S.ProductWrapper>
    </S.Container>
  );
}
