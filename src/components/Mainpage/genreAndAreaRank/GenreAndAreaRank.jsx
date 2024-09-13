import React, { useState } from 'react';
import './GenreAndAreaRank.style.css';
import { useAreaRank, useGenreRank } from '../../../hooks/useGenreAreaCategiry';

const GenreAndAreaRank = () => {
  const [selectedRank, setSelectedRank] = useState('genre');
  const [genreCategoryButton, setGenreCategoryButton] = useState('play');
  const [areaCategoryButton, setAreaCategoryButton] = useState('seoul');
  const [selectedDate, setSelectedDate] = useState('day');
  const baseUrl = 'http://www.kopis.or.kr';
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };
  const currentDate = new Date();
  const twoDaysAgo = new Date(currentDate);
  twoDaysAgo.setDate(currentDate.getDate() - 2);
  const formattedCurrentDate = getFormattedDate(currentDate);
  const formattedTwoDaysAgo = getFormattedDate(twoDaysAgo);

  const { data: play } = useGenreRank({ ststype: 'day', date: formattedTwoDaysAgo, catecode: 'AAAA' });
  const { data: musical } = useGenreRank({ ststype: 'day', date: formattedTwoDaysAgo, catecode: 'GGGA' });
  const { data: concert } = useGenreRank({ ststype: 'day', date: formattedTwoDaysAgo, catecode: 'CCCC|CCCD' });
  const { data: classicAndDance } = useGenreRank({
    ststype: 'day',
    date: formattedTwoDaysAgo,
    catecode: 'CCCA|BBBC|BBBR'
  });
  const { data: circusMagice } = useGenreRank({ ststype: 'day', date: formattedTwoDaysAgo, catecode: 'EEEB' });
  const { data: kid } = useGenreRank({ ststype: 'day', date: formattedTwoDaysAgo, catecode: 'KID' });

  // week
  const { data: playW } = useGenreRank({ ststype: 'week', date: formattedCurrentDate, catecode: 'AAAA' });
  const { data: musicalW } = useGenreRank({ ststype: 'week', date: formattedCurrentDate, catecode: 'GGGA' });
  const { data: concertW } = useGenreRank({ ststype: 'week', date: formattedCurrentDate, catecode: 'CCCC|CCCD' });
  const { data: classicAndDanceW } = useGenreRank({
    ststype: 'week',
    date: formattedCurrentDate,
    catecode: 'CCCA|BBBC|BBBR'
  });
  const { data: circusMagiceW } = useGenreRank({ ststype: 'week', date: formattedCurrentDate, catecode: 'EEEB' });
  const { data: kidW } = useGenreRank({ ststype: 'week', date: formattedCurrentDate, catecode: 'KID' });

  // month
  const { data: playM } = useGenreRank({ ststype: 'month', date: formattedCurrentDate, catecode: 'AAAA' });
  const { data: musicalM } = useGenreRank({ ststype: 'month', date: formattedCurrentDate, catecode: 'GGGA' });
  const { data: concertM } = useGenreRank({ ststype: 'month', date: formattedCurrentDate, catecode: 'CCCC|CCCD' });
  const { data: classicAndDanceM } = useGenreRank({
    ststype: 'month',
    date: formattedCurrentDate,
    catecode: 'CCCA|BBBC|BBBR'
  });
  const { data: circusMagiceM } = useGenreRank({ ststype: 'month', date: formattedCurrentDate, catecode: 'EEEB' });
  const { data: kidM } = useGenreRank({ ststype: 'month', date: formattedCurrentDate, catecode: 'KID' });

  // day
  const { data: seoulDay } = useAreaRank({ ststype: 'day', date: formattedTwoDaysAgo, area: '11' });
  const { data: incheonAndGyeonggiDay } = useAreaRank({ ststype: 'day', date: formattedTwoDaysAgo, area: '28|41' });
  const { data: daejeonAndSejongDay } = useAreaRank({ ststype: 'day', date: formattedTwoDaysAgo, area: '30|36' });
  const { data: daeguAndBusanAndUlsanDay } = useAreaRank({
    ststype: 'day',
    date: formattedTwoDaysAgo,
    area: '27|26|31'
  });
  const { data: chungcheongAndGangwonDay } = useAreaRank({
    ststype: 'day',
    date: formattedTwoDaysAgo,
    area: '43|44|51'
  });
  const { data: gwangjuAndJeollaAndGyeongsangDay } = useAreaRank({
    ststype: 'day',
    date: formattedTwoDaysAgo,
    area: '45|46|29|47|48'
  });
  const { data: jejuDay } = useAreaRank({ ststype: 'day', date: formattedTwoDaysAgo, area: '50' });

  // week
  const { data: seoulWeek } = useAreaRank({ ststype: 'week', date: formattedCurrentDate, area: '11' });
  const { data: incheonAndGyeonggiWeek } = useAreaRank({ ststype: 'week', date: formattedCurrentDate, area: '28|41' });
  const { data: daejeonAndSejongWeek } = useAreaRank({ ststype: 'week', date: formattedCurrentDate, area: '30|36' });
  const { data: daeguAndBusanAndUlsanWeek } = useAreaRank({
    ststype: 'week',
    date: formattedCurrentDate,
    area: '27|26|31'
  });
  const { data: chungcheongAndGangwonWeek } = useAreaRank({
    ststype: 'week',
    date: formattedCurrentDate,
    area: '43|44|51'
  });
  const { data: gwangjuAndJeollaAndGyeongsangWeek } = useAreaRank({
    ststype: 'week',
    date: formattedCurrentDate,
    area: '45|46|29|47|48'
  });
  const { data: jejuWeek } = useAreaRank({ ststype: 'week', date: formattedCurrentDate, area: '50' });

  // month
  const { data: seoulMonth } = useAreaRank({ ststype: 'month', date: formattedCurrentDate, area: '11' });
  const { data: incheonAndGyeonggiMonth } = useAreaRank({
    ststype: 'month',
    date: formattedCurrentDate,
    area: '28|41'
  });
  const { data: daejeonAndSejongMonth } = useAreaRank({ ststype: 'month', date: formattedCurrentDate, area: '30|36' });
  const { data: daeguAndBusanAndUlsanMonth } = useAreaRank({
    ststype: 'month',
    date: formattedCurrentDate,
    area: '27|26|31'
  });
  const { data: chungcheongAndGangwonMonth } = useAreaRank({
    ststype: 'month',
    date: formattedCurrentDate,
    area: '43|44|51'
  });
  const { data: gwangjuAndJeollaAndGyeongsangMonth } = useAreaRank({
    ststype: 'month',
    date: formattedCurrentDate,
    area: '45|46|29|47|48'
  });
  const { data: jejuMonth } = useAreaRank({ ststype: 'month', date: formattedCurrentDate, area: '50' });

  const getData = () => {
    let data;
    if (selectedRank === 'genre') {
      switch (genreCategoryButton) {
        case 'play':
          data = selectedDate === 'day' ? play : selectedDate === 'week' ? playW : playM;
          break;
        case 'musical':
          data = selectedDate === 'day' ? musical : selectedDate === 'week' ? musicalW : musicalM;
          break;
        case 'concert':
          data = selectedDate === 'day' ? concert : selectedDate === 'week' ? concertW : concertM;
          break;
        case 'classicAndDance':
          data =
            selectedDate === 'day' ? classicAndDance : selectedDate === 'week' ? classicAndDanceW : classicAndDanceM;
          break;
        case 'circusMagice':
          data = selectedDate === 'day' ? circusMagice : selectedDate === 'week' ? circusMagiceW : circusMagiceM;
          break;
        case 'kid':
          data = selectedDate === 'day' ? kid : selectedDate === 'week' ? kidW : kidM;
          break;
        default:
          data = [];
      }
    } else if (selectedRank === 'area') {
      switch (areaCategoryButton) {
        case 'seoul':
          data = selectedDate === 'day' ? seoulDay : selectedDate === 'week' ? seoulWeek : seoulMonth;
          break;
        case 'incheonAndGyeonggi':
          data =
            selectedDate === 'day'
              ? incheonAndGyeonggiDay
              : selectedDate === 'week'
                ? incheonAndGyeonggiWeek
                : incheonAndGyeonggiMonth;
          break;
        case 'daejeonAndSejong':
          data =
            selectedDate === 'day'
              ? daejeonAndSejongDay
              : selectedDate === 'week'
                ? daejeonAndSejongWeek
                : daejeonAndSejongMonth;
          break;
        case 'daeguAndBusanAndUlsan':
          data =
            selectedDate === 'day'
              ? daeguAndBusanAndUlsanDay
              : selectedDate === 'week'
                ? daeguAndBusanAndUlsanWeek
                : daeguAndBusanAndUlsanMonth;
          break;
        case 'chungcheongAndGangwon':
          data =
            selectedDate === 'day'
              ? chungcheongAndGangwonDay
              : selectedDate === 'week'
                ? chungcheongAndGangwonWeek
                : chungcheongAndGangwonMonth;
          break;
        case 'gwangjuAndJeollaAndGyeongsang':
          data =
            selectedDate === 'day'
              ? gwangjuAndJeollaAndGyeongsangDay
              : selectedDate === 'week'
                ? gwangjuAndJeollaAndGyeongsangWeek
                : gwangjuAndJeollaAndGyeongsangMonth;
          break;
        case 'jeju':
          data = selectedDate === 'day' ? jejuDay : selectedDate === 'week' ? jejuWeek : jejuMonth;
          break;
        default:
          data = [];
      }
    }

    return data || [];
  };

  const genreCategories = () => (
    <>
      <button
        className={genreCategoryButton === 'play' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('play')}>
        연극
      </button>
      <button
        className={genreCategoryButton === 'musical' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('musical')}>
        뮤지컬
      </button>
      <button
        className={genreCategoryButton === 'concert' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('concert')}>
        콘서트
      </button>
      <button
        className={genreCategoryButton === 'classicAndDance' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('classicAndDance')}>
        클래식/무용
      </button>
      <button
        className={genreCategoryButton === 'circusMagice' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('circusMagice')}>
        서커스/마술
      </button>
      <button
        className={genreCategoryButton === 'kid' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('kid')}>
        아동
      </button>
    </>
  );

  const areaCategories = () => (
    <>
      <button
        className={areaCategoryButton === 'seoul' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setAreaCategoryButton('seoul')}>
        서울
      </button>
      <button
        className={areaCategoryButton === 'incheonAndGyeonggi' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setAreaCategoryButton('incheonAndGyeonggi')}>
        경기/인천
      </button>
      <button
        className={areaCategoryButton === 'daejeonAndSejong' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setAreaCategoryButton('daejeonAndSejong')}>
        대전/세종
      </button>
      <button
        className={areaCategoryButton === 'daeguAndBusanAndUlsan' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setAreaCategoryButton('daeguAndBusanAndUlsan')}>
        대구/부산/울산
      </button>
      <button
        className={areaCategoryButton === 'chungcheongAndGangwon' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setAreaCategoryButton('chungcheongAndGangwon')}>
        충청/강원
      </button>
      <button
        className={areaCategoryButton === 'gwangjuAndJeollaAndGyeongsang' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setAreaCategoryButton('gwangjuAndJeollaAndGyeongsang')}>
        광주/전라/경상
      </button>
      <button
        className={areaCategoryButton === 'jeju' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setAreaCategoryButton('jeju')}>
        제주
      </button>
    </>
  );

  const GenreClick = () => {
    setSelectedRank('genre');
    setAreaCategoryButton('seoul');
    setSelectedDate('day');
  };
  const areaClick = () => {
    setSelectedRank('area');
    setGenreCategoryButton('play');
    setSelectedDate('day');
  };

  const renderData = () => {
    const data = getData();

    if (data && data.boxofs && data.boxofs.boxof && data.boxofs.boxof.length > 0) {
      return data.boxofs.boxof.slice(0, 5).map((item, index) => (
        <div className='genre-area-rank-item' key={index}>
          <div className='genre-area-rank-img-box'>
            <div className='genre-area-rank-img-box-detail'>
              <img src={`${baseUrl}${item.poster}`} alt='' />
            </div>
            <p>{item.rnum}</p>
          </div>
          <p className='genre-area-rank-title'>{item.prfnm}</p>
          <p className='genre-area-rank-date'>{item.prfpd}</p>
        </div>
      ));
    }

    return <p></p>;
  };

  return (
    <div className='genre-area-rank-container'>
      <div className='genre-area-rank-wrap'>
        <div className='genre-area-rank-header'>
          <div className='genre-area-rank-header-box'>
            <h1
              className={`genre-rank ${selectedRank === 'genre' ? 'genre-area-rank-header-click' : ''}`}
              onClick={GenreClick}>
              장르별랭킹
            </h1>
            <h1
              className={`area-rank ${selectedRank === 'area' ? 'genre-area-rank-header-click' : ''}`}
              onClick={areaClick}>
              지역별랭킹
            </h1>
          </div>
          <a href='#'>전체보기</a>
        </div>
        <div className='genre-area-rank-category-box'>
          <div className='genre-area-rank-category'>
            {selectedRank === 'genre' ? genreCategories() : areaCategories()}
          </div>
          <div className='genre-area-rank-date-category'>
            <div
              className={`genre-area-rank-date-category-item ${selectedDate === 'day' ? 'genre-area-rank-date-click' : ''}`}
              onClick={() => setSelectedDate('day')}>
              일간
            </div>
            <div
              className={`genre-area-rank-date-category-item ${selectedDate === 'week' ? 'genre-area-rank-date-click' : ''}`}
              onClick={() => setSelectedDate('week')}>
              주간
            </div>
            <div
              className={`genre-area-rank-date-category-item ${selectedDate === 'month' ? 'genre-area-rank-date-click' : ''}`}
              onClick={() => setSelectedDate('month')}>
              월간
            </div>
          </div>
        </div>

        <div className='genre-area-rank-box'>{renderData()}</div>
      </div>
    </div>
  );
};

export default GenreAndAreaRank;
