import React, { useEffect, useState } from 'react';
import { useTheaterQuery } from '../../hooks/useTheaterQuery';
import { useLocateQuery } from '../../hooks/useLocateQuery';
import { CiShare2 } from 'react-icons/ci';
import Calendar from 'react-calendar';
import { Map } from 'react-kakao-maps-sdk';

import './DetailProduct.style.css';
import * as S from './DetailProduct.styled';

import 'react-calendar/dist/Calendar.css';

function DetailProduct({ id }) {
  const sampleId = 'PF132236'; //여기에 'PF132236'대신 props로 전달 받은 id값을 넣어주시면 됩니다.
  const { data, isLoading, error, isError } = useTheaterQuery(sampleId);
  const { data: relateP } = useLocateQuery(data?.mt10id);
  let la = 0;
  let lo = 0;
  console.log(relateP);

  if (relateP) {
    la = relateP?.la;
    lo = relateP?.lo;
  }

  const root = document.getElementById('root');
  const [selectedDate, setSelectedDate] = useState(new Date());

  root.classList.add('root-center');

  if (isLoading) return <div>..Loading..</div>;
  if (isError) console.log(error.message);
  const title = data.prfnm;
  const startDate = data.prfpdfrom;
  const endDate = data.prfpdto;
  const runtime = data.prfruntime;
  const detailPhotos = data.styurls.styurl;
  const child = data.child;
  const age = data.prfage;
  const price = data.pcseguidance;
  const genre = data.genrenm;
  const actors = data.prfcast;
  const timeInfo = data.dtguidance.split(',');
  const company = data.entrpsnm;
  const place = data.fcltynm;
  const theaterId = data.mt20id; //공연 Id
  const relatePlaceId = data.mt10id; //주변 시설물Id

  ///공연시각 ex) 금(17:00~)
  let timeStr = '';
  timeInfo.map((time) => {
    timeStr += time + ' | ';
  });

  const kakaoShare = () => {
    let currentURL = window.location.url;
    let productImageUrl = data?.poster;
    let productSummary = '';
    let productTitle = title;
    window.Kakao.init(process.env.REACT_APP_KAKAO_MAP);
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: productTitle,
        description: productSummary,
        imageUrl: productImageUrl,
        link: {
          mobileWebUrl: currentURL,
          webUrl: currentURL
        }
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: currentURL,
            webUrl: currentURL
          }
        }
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true
    });
  };

  return (
    <S.detailPage>
      <section className='main-container'>
        <S.imgCard imgURL={data.poster} width={405} height={500} />
        <div className='main-info'>
          <div className='title-line'>
            <S.Title>
              {genre}
              {`<`}
              {title}
              {`>`}
            </S.Title>
            <CiShare2 size={20} onClick={kakaoShare} />
          </div>
          <hr className='underline-1' />
          <ul>
            <S.rowStyle>
              <S.itemInfo>
                <span className='info-title'>장르</span>
                <div className='info-desc'>{genre}</div>
              </S.itemInfo>
              <S.itemInfo>
                <span className='info-title'>관람시간</span>
                <div className='info-desc'>{runtime}</div>
              </S.itemInfo>
            </S.rowStyle>
            <S.rowStyle>
              <S.itemInfo>
                <span className='info-title'>기간</span>
                <div className='info-desc'>
                  {startDate} ~ {endDate}
                </div>
              </S.itemInfo>

              <S.itemInfo>
                <span className='info-title'>관람등급</span>
                <div className='info-desc'>{age}</div>
              </S.itemInfo>
            </S.rowStyle>
          </ul>
          <hr className='underline-2' />
          <S.rowStyle>
            <S.itemInfo>
              <span className='info-title'>가격</span>
              <div className='info-desc'>{price}</div>
            </S.itemInfo>
            <S.itemInfo>
              <span className='info-title'>할인</span>
              <div className='info-desc'>창작 후원 할인 20%</div>
            </S.itemInfo>
          </S.rowStyle>
        </div>
      </section>
      <S.flexDiv isborder={true}>
        <S.flexDiv borderR={true} padding={true}>
          <S.monthStep>
            <S.stepH>
              <span>STEP 1</span>
              <span>날짜 선택</span>
            </S.stepH>
          </S.monthStep>
          <S.calendarWrapper>
            <Calendar onChange={setSelectedDate} value={selectedDate} />
          </S.calendarWrapper>
        </S.flexDiv>
        <S.flexDiv borderR={true} padding={true}>
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
                  <span>{actors}</span>
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
      <S.Button>예매하기</S.Button>
      <S.detailSection>
        <S.Title mt={true}>상세정보</S.Title>
        <S.subTitle>공연 시간 정보</S.subTitle>
        <p>
          {startDate} ~ {endDate}
        </p>
        <p>{timeStr.slice(0, -2)}</p>

        <S.noticeDiv>
          <S.subTitle>공지사항</S.subTitle>
          <img src='data:image/png;base64,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' />
        </S.noticeDiv>

        {detailPhotos.map((photo, index) => (
          <img src={photo} key={index} />
        ))}
      </S.detailSection>
      <S.flexDiv map={true}>
        <S.Title>장소 정보</S.Title>
        <S.locateP>장소: {relateP?.adres}</S.locateP>
        <S.locateP>
          공연장명: {relateP?.fcltynm}&nbsp;{relateP?.mt13s.prfplcnm}
        </S.locateP>
        <S.locateP>대표번호: 031-1577-7766</S.locateP>
        <Map center={{ lat: la, lng: lo }} level={7} className='kakao-map' />
      </S.flexDiv>
      <S.infoSection>
        <S.tableDiv>
          <colgroup>
            <S.colStyle width={'168px'}></S.colStyle>
            <S.colStyle width={'336px'}></S.colStyle>
            <S.colStyle width={'168px'}></S.colStyle>
          </colgroup>
          <tbody>
            <S.Title>상품관련 정보</S.Title>
            <S.rowStyle top='#505152' color='#dcdddf'>
              <th>주최/기획</th>
              <td>&nbsp;&nbsp;{company}</td>
              <th>고객문의</th>
              <td>&nbsp;&nbsp;02-6954-0772</td>
            </S.rowStyle>
            <S.rowStyle color='#dcdddf'>
              <th>주연</th>
              <td>&nbsp;&nbsp;{actors}</td>
              <th>관람등급</th>
              <td>&nbsp;&nbsp;{age}</td>
            </S.rowStyle>
            <S.rowStyle color='#dcdddf'>
              <th>공연시간</th>
              <td>&nbsp;&nbsp;{runtime}</td>
              <th>공연장소</th>
              <td>&nbsp;&nbsp;{place}</td>
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
  );
}

export default DetailProduct;
