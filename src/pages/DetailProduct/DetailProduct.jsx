import React, { useEffect, useRef, useState } from 'react';
import { useTheaterQuery } from '../../hooks/useTheaterQuery';
import { useLocateQuery } from '../../hooks/useLocateQuery';
import { CiShare2 } from 'react-icons/ci';
import Calendar from 'react-calendar';
import * as S from './DetailProduct.styled';
import moment from 'moment/moment';
import DetailTab from '../../components/DetailProduct/DetailTab';
import DetailLocation from './DetailLocation';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import { object } from 'prop-types';

function DetailProduct() {
  const { id } = useParams();

  const { data, isLoading, error, isError } = useTheaterQuery({ id });
  const { data: relateP } = useLocateQuery(data?.mt10id);
  let la = 0;
  let lo = 0;

  if (relateP) {
    la = relateP?.la;
    lo = relateP?.lo;
  }

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDetailSection, setIsDetailSection] = useState(true);
  const [isDetailLocation, setIsDetailLocation] = useState(false);

  if (isLoading) return <div>..Loading..</div>;
  if (isError) console.log(error.message);

  ///공연시각 ex) 금(17:00~)
  let timeStr = '';
  data?.dtguidance?.split(',').map((time) => {
    return (timeStr += time + ' | ');
  });

  console.log(typeof data?.styurls.styurl);
  console.log(data?.styurls.styurl);

  const kakaoShare = () => {
    let currentURL = window.location.url;
    let productImageUrl = data?.poster;
    let productSummary = '';
    let productTitle = data?.title;

    const { Kakao } = window;
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_MAP);
    }
    console.log(Kakao);
    let thisURL = document.URL;

    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: productTitle,
        description: productSummary,
        imageUrl: productImageUrl,
        link: {
          webUrl: thisURL
        }
      },
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true
    });
  };

  const bookProduct = () => {
    alert('성공적으로 예매되었습니다!');
  };

  return (
    <S.flexDiv width={true}>
      <S.detailPage>
        <S.mainSection>
          <S.imgCard imgURL={data?.poster} width={405} height={500} />
          <S.mainInfo>
            <S.titleLine>
              <S.Title>
                {data?.genrenm}
                {`<`}
                {data?.prfnm}
                {`>`}
              </S.Title>
              <S.shareButton>
                <CiShare2 size={20} onClick={kakaoShare} />
              </S.shareButton>
            </S.titleLine>
            <S.underLine1 />
            <S.flexDiv>
              <S.itemInfo>
                <S.infoLabel>장르</S.infoLabel>
                <S.infoDesc>{data?.genrenm}</S.infoDesc>
              </S.itemInfo>
              <S.itemInfo>
                <S.infoLabel>관람시간</S.infoLabel>
                <S.infoDesc>{data?.prfruntime}</S.infoDesc>
              </S.itemInfo>
            </S.flexDiv>
            <S.flexDiv>
              <S.itemInfo>
                <S.infoLabel>기간</S.infoLabel>
                <S.infoDesc>
                  {data?.prfpdfrom} ~ {data?.prfpdto}
                </S.infoDesc>
              </S.itemInfo>

              <S.itemInfo>
                <S.infoLabel>관람등급</S.infoLabel>
                <S.infoDesc>{data?.prfage}</S.infoDesc>
              </S.itemInfo>
            </S.flexDiv>
            <S.underLine2 />
            <S.flexDiv>
              <S.itemInfo>
                <S.infoLabel>가격</S.infoLabel>
                <S.infoDesc>{data?.pcseguidance}</S.infoDesc>
              </S.itemInfo>
              <S.itemInfo>
                <S.infoLabel>할인</S.infoLabel>
                <S.infoDesc>창작 후원 할인 20%</S.infoDesc>
              </S.itemInfo>
            </S.flexDiv>
          </S.mainInfo>
        </S.mainSection>
        <S.flexDiv isborder={true}>
          <S.flexDiv borderR={true} padding={true} calender={true}>
            <S.monthStep>
              <S.stepH>
                <span>STEP 1</span>
                <span>날짜 선택</span>
              </S.stepH>
            </S.monthStep>
            <S.calendarWrapper>
              <Calendar
                calendarType='gregory'
                onChange={setSelectedDate}
                value={selectedDate}
                theme={{ red_1: '#fa2828' }}
                formatDay={(locale, date) => moment(date).format('D')} // 일 제거 숫자만 보이게
                formatYear={(locale, date) => moment(date).format('YYYY')} // 네비게이션 눌렀을때 숫자 년도만 보이게
                formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
              />
            </S.calendarWrapper>
          </S.flexDiv>
          <S.flexDiv borderR={true} padding={true} time={true}>
            <S.monthStep>
              <S.stepH>
                <span>STEP 2</span>
                <span>회차 선택</span>
              </S.stepH>
            </S.monthStep>
            <S.timeStep>
              <S.timeBox>
                <h2>
                  <span>{'19시 30분'}</span>
                </h2>
                <h2>
                  <span>
                    <span>출연진</span>
                    <span>{data?.prfcast ? data?.prfcast : '없음'}</span>
                  </span>
                </h2>
              </S.timeBox>
            </S.timeStep>
          </S.flexDiv>
          <S.seatBox>
            <h3>예매가능좌석</h3>
            <ul>
              <li>
                <span>VIP석</span>
                <span>만석</span>
              </li>
              <li>
                <span>R석</span>
                <span>만석</span>
              </li>
              <li>
                <span>S석</span>
                <span>만석</span>
              </li>
              <li>
                <span>A석</span>
                <span>만석</span>
              </li>
            </ul>
          </S.seatBox>
        </S.flexDiv>
        <S.flexDiv book={true}>
          <img
            width={204}
            height={54}
            src='data:image/png;base64,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'
            alt='페이코 간편 결제'></img>
          <S.Button onClick={bookProduct}> 예매하기</S.Button>
        </S.flexDiv>
        <DetailTab handleDetail={setIsDetailSection} handleLocation={setIsDetailLocation} />
        {isDetailSection && (
          <S.detailSection>
            <S.Title mt={true}>상세정보</S.Title>
            <S.subTitle>공연 시간 정보</S.subTitle>
            <p>
              {data?.prfpdfrom} ~ {data?.prfpdto}
            </p>
            <p>{timeStr.slice(0, -2)}</p>
            <S.noticeDiv>
              <S.subTitle>공지사항</S.subTitle>
              <img src='data:image/png;base64,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' />
            </S.noticeDiv>
            {typeof data?.styurls.styurl === 'string' ? (
              <img src={data?.styurls.styurl} />
            ) : (
              data?.styurls.styurl.map((url, index) => <img src={url} key={index} />)
            )}
          </S.detailSection>
        )}
        {isDetailLocation && (
          <DetailLocation
            adress={relateP?.adres}
            name={relateP?.fcltynm}
            subName={relateP?.mt13s.prfplcnm}
            la={la}
            lo={lo}
          />
        )}
        <S.infoSection>
          <S.tableDiv>
            <colgroup>
              <S.colStyle width={'168px'}></S.colStyle>
              <S.colStyle width={'336px'}></S.colStyle>
              <S.colStyle width={'168px'}></S.colStyle>
            </colgroup>
            <tbody>
              <S.Title mb={true}>상품관련 정보</S.Title>
              <S.rowStyle top='#c6c3c3' color='#dcdddf'>
                <th>주최/기획</th>
                <td>&nbsp;&nbsp;{data?.entrpsnm ? data?.entrpsnm : '없음'}</td>
                <th>고객문의</th>
                <td>&nbsp;&nbsp;02-6954-0772</td>
              </S.rowStyle>
              <S.rowStyle color='#dcdddf'>
                <th>주연</th>
                <td>&nbsp;&nbsp;{data?.prfcast ? data?.prfcast : '없음'}</td>
                <th>관람등급</th>
                <td>&nbsp;&nbsp;{data?.prfage}</td>
              </S.rowStyle>
              <S.rowStyle color='#dcdddf'>
                <th>공연시간</th>
                <td>&nbsp;&nbsp;{data?.prfruntime}</td>
                <th>공연장소</th>
                <td>&nbsp;&nbsp;{data?.fcltynm}</td>
              </S.rowStyle>
              <S.rowStyle color='#dcdddf'>
                <th>예매취소조건</th>
                <td colSpan={3}>
                  취소일자에 따라 아래와 같이 취소수수료가 부과됩니다. 예매일 기준보다 관람일 기준이 우선 적용됩니다.
                  <br />
                  단, 예매 당일 밤 12시 이전 취소 시에는 취소수수료가 없으며 예매수수료도 환불됩니다. {'('}취소기한 내에
                  한함{')'}
                  <br />
                  <br />
                  예매후 7일 이내 : 취소수수료 없음
                  <br />
                  예매후 8일 ~ 관람일 10일 전 : 뮤지컬/콘서트/클래식 등 공연 장당 4,000원, 연극/전시 등 입장권 장당
                  2,000원
                  <br />
                  {'('}단, 최대 티켓금액의 10% 이내{')'}
                  <br />
                  관람일 9일 전 ~ 7일 전 : 티켓금액의 10%
                  <br />
                  관람일 6일 전 ~ 3일 전 : 티켓금액의 20%
                  <br />
                  관람일 2일 전 ~ 1일 전 : 티켓금액의 30%
                  <br />
                  공연 취소 시 : 없음
                  <br />
                </td>
              </S.rowStyle>
            </tbody>
          </S.tableDiv>
        </S.infoSection>
      </S.detailPage>
    </S.flexDiv>
  );
}

export default DetailProduct;
