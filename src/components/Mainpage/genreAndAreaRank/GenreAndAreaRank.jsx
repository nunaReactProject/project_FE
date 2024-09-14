import React, { useEffect, useState } from 'react';
import './GenreAndAreaRank.style.css';
import { useAreaRank, useGenreRank } from '../../../hooks/useGenreAreaCategiry';
import { useNavigate } from 'react-router-dom';

const GenreAndAreaRank = () => {
  const [selectedRank, setSelectedRank] = useState('genre');
  const [genreCategoryButton, setGenreCategoryButton] = useState('play');
  const [areaCategoryButton, setAreaCategoryButton] = useState('seoul');
  const [selectedDate, setSelectedDate] = useState('day');
  const [code, setCode] = useState('AAAA');
  const [data, setData] = useState(null);
  const baseUrl = 'http://www.kopis.or.kr';

  const navigate = useNavigate();

  const onNavigateRaking = () => {
    navigate('/all');
  };

  const onNavigateDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

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
  const [date, setDate] = useState(formattedTwoDaysAgo);

  const genreData = useGenreRank({ ststype: selectedDate, date: date, catecode: code });
  const areaData = useAreaRank({ ststype: selectedDate, date: date, area: code });

  const categoryMapping = {
    play: 'AAAA',
    musical: 'GGGA',
    concert: 'CCCC|CCCD',
    classicAndDance: 'CCCA|BBBC|BBBR',
    circusMagice: 'EEEB',
    kid: 'KID'
  };

  const areaMapping = {
    seoul: '11',
    incheonAndGyeonggi: '28|41',
    daejeonAndSejong: '30|36',
    daeguAndBusanAndUlsan: '27|26|31',
    chungcheongAndGangwon: '43|44|51',
    gwangjuAndJeollaAndGyeongsang: '45|46|29|47|48',
    jeju: '50'
  };

  const genreCategoryClick = (type) => {
    setGenreCategoryButton(type);
    setCode(categoryMapping[type]);
  };
  const areaCategoryClick = (type) => {
    setAreaCategoryButton(type);
    setCode(areaMapping[type]);
  };
  const dateClick = (date) => {
    setSelectedDate(date);
    if (selectedDate === 'day') {
      setDate(formattedTwoDaysAgo);
    } else {
      setData(formattedCurrentDate);
    }
  };

  const genreCategories = () => (
    <>
      <button
        className={genreCategoryButton === 'play' ? 'genre-area-rank-category-click' : ''}
        onClick={() => genreCategoryClick('play')}>
        연극
      </button>
      <button
        className={genreCategoryButton === 'musical' ? 'genre-area-rank-category-click' : ''}
        onClick={() => genreCategoryClick('musical')}>
        뮤지컬
      </button>
      <button
        className={genreCategoryButton === 'concert' ? 'genre-area-rank-category-click' : ''}
        onClick={() => genreCategoryClick('concert')}>
        콘서트
      </button>
      <button
        className={genreCategoryButton === 'classicAndDance' ? 'genre-area-rank-category-click' : ''}
        onClick={() => genreCategoryClick('classicAndDance')}>
        클래식/무용
      </button>
      <button
        className={genreCategoryButton === 'circusMagice' ? 'genre-area-rank-category-click' : ''}
        onClick={() => genreCategoryClick('circusMagice')}>
        서커스/마술
      </button>
      <button
        className={genreCategoryButton === 'kid' ? 'genre-area-rank-category-click' : ''}
        onClick={() => genreCategoryClick('kid')}>
        아동
      </button>
    </>
  );

  const itemClick = (item) => {
    onNavigateDetailPage(item.mt20id);
  };

  const areaCategories = () => (
    <>
      <button
        className={areaCategoryButton === 'seoul' ? 'genre-area-rank-category-click' : ''}
        onClick={() => areaCategoryClick('seoul')}>
        서울
      </button>
      <button
        className={areaCategoryButton === 'incheonAndGyeonggi' ? 'genre-area-rank-category-click' : ''}
        onClick={() => areaCategoryClick('incheonAndGyeonggi')}>
        경기/인천
      </button>
      <button
        className={areaCategoryButton === 'daejeonAndSejong' ? 'genre-area-rank-category-click' : ''}
        onClick={() => areaCategoryClick('daejeonAndSejong')}>
        대전/세종
      </button>
      <button
        className={areaCategoryButton === 'daeguAndBusanAndUlsan' ? 'genre-area-rank-category-click' : ''}
        onClick={() => areaCategoryClick('daeguAndBusanAndUlsan')}>
        대구/부산/울산
      </button>
      <button
        className={areaCategoryButton === 'chungcheongAndGangwon' ? 'genre-area-rank-category-click' : ''}
        onClick={() => areaCategoryClick('chungcheongAndGangwon')}>
        충청/강원
      </button>
      <button
        className={areaCategoryButton === 'gwangjuAndJeollaAndGyeongsang' ? 'genre-area-rank-category-click' : ''}
        onClick={() => areaCategoryClick('gwangjuAndJeollaAndGyeongsang')}>
        광주/전라/경상
      </button>
      <button
        className={areaCategoryButton === 'jeju' ? 'genre-area-rank-category-click' : ''}
        onClick={() => areaCategoryClick('jeju')}>
        제주
      </button>
    </>
  );

  const GenreClick = () => {
    setSelectedRank('genre');
    setAreaCategoryButton('seoul');
    setSelectedDate('day');
    setCode('AAAA');
  };
  const areaClick = () => {
    setSelectedRank('area');
    setGenreCategoryButton('play');
    setSelectedDate('day');
    setCode('11');
  };

  useEffect(() => {
    if (selectedRank === 'genre' && genreData?.data) {
      setData(genreData.data);
    } else if (selectedRank === 'area' && areaData?.data) {
      setData(areaData.data);
    }
  }, [selectedRank, genreData, areaData, selectedDate]);

  const renderData = (data) => {
    if (data && data.boxofs && data.boxofs.boxof && data.boxofs.boxof.length > 0) {
      return data.boxofs.boxof.slice(0, 5).map((item, index) => (
        <div className='genre-area-rank-item' key={index}>
          <div className='genre-area-rank-img-box' onClick={() => itemClick(item)}>
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
          <p className='allviewtext' onClick={onNavigateRaking}>
            전체보기
          </p>
        </div>
        <div className='genre-area-rank-category-box'>
          <div className='genre-area-rank-category'>
            {selectedRank === 'genre' ? genreCategories() : areaCategories()}
          </div>
          <div className='genre-area-rank-date-category'>
            <div
              className={`genre-area-rank-date-category-item ${selectedDate === 'day' ? 'genre-area-rank-date-click' : ''}`}
              onClick={() => dateClick('day')}>
              일간
            </div>
            <div
              className={`genre-area-rank-date-category-item ${selectedDate === 'week' ? 'genre-area-rank-date-click' : ''}`}
              onClick={() => dateClick('week')}>
              주간
            </div>
            <div
              className={`genre-area-rank-date-category-item ${selectedDate === 'month' ? 'genre-area-rank-date-click' : ''}`}
              onClick={() => dateClick('month')}>
              월간
            </div>
          </div>
        </div>

        <div className='genre-area-rank-box'>{renderData(data)}</div>
      </div>
    </div>
  );
};

export default GenreAndAreaRank;
