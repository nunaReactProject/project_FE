import React, { useState } from 'react';
import './GenreAndAreaRank.style.css';
import * as GenreHooks from '../../../hooks/useGenreCategories';

const GenreAndAreaRank = () => {
  const [selectedRank, setSelectedRank] = useState('genre');
  const [genreCategoryButton, setGenreCategoryButton] = useState('play');
  const [areaCategoryButton, setAreaCategoryButton] = useState('seoul');
  const [selectedDate, setSelectedDate] = useState('day');
  const baseUrl = 'http://www.kopis.or.kr';

  // day
  const { data: play } = GenreHooks.useGenrePlayDay();
  const { data: musical } = GenreHooks.useGenreMusicalDay();
  const { data: classic } = GenreHooks.useGenreClassicDay();
  const { data: koreanMusic } = GenreHooks.useGenreKoreanMusicDay();
  const { data: popularMusic } = GenreHooks.useGenrePopularMusicDay();
  const { data: dance } = GenreHooks.useGenreDanceDay();
  const { data: popularDance } = GenreHooks.useGenrePopularDanceDay();
  const { data: circusMagice } = GenreHooks.useGenreCircusMagiceDay();
  const { data: compound } = GenreHooks.useGenreCompoundDay();
  const { data: kid } = GenreHooks.useGenreKidDay();
  const { data: open } = GenreHooks.useGenreOpenDay();

  // week
  const { data: playW } = GenreHooks.useGenrePlayWeek();
  const { data: musicalW } = GenreHooks.useGenreMusicalWeek();
  const { data: classicW } = GenreHooks.useGenreClassicWeek();
  const { data: koreanMusicW } = GenreHooks.useGenreKoreanMusicWeek();
  const { data: popularMusicW } = GenreHooks.useGenrePopularMusicWeek();
  const { data: danceW } = GenreHooks.useGenreDanceWeek();
  const { data: popularDanceW } = GenreHooks.useGenrePopularDanceWeek();
  const { data: circusMagiceW } = GenreHooks.useGenreCircusMagiceWeek();
  const { data: compoundW } = GenreHooks.useGenreCompoundWeek();
  const { data: kidW } = GenreHooks.useGenreKidWeek();
  const { data: openW } = GenreHooks.useGenreOpenWeek();

  // month
  const { data: playM } = GenreHooks.useGenrePlayMonth();
  const { data: musicalM } = GenreHooks.useGenreMusicalMonth();
  const { data: classicM } = GenreHooks.useGenreClassicMonth();
  const { data: koreanMusicM } = GenreHooks.useGenreKoreanMusicMonth();
  const { data: popularMusicM } = GenreHooks.useGenrePopularMusicMonth();
  const { data: danceM } = GenreHooks.useGenreDanceMonth();
  const { data: popularDanceM } = GenreHooks.useGenrePopularDanceMonth();
  const { data: circusMagiceM } = GenreHooks.useGenreCircusMagiceMonth();
  const { data: compoundM } = GenreHooks.useGenreCompoundMonth();
  const { data: kidM } = GenreHooks.useGenreKidMonth();
  const { data: openM } = GenreHooks.useGenreOpenMonth();

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
        case 'classic':
          data = selectedDate === 'day' ? classic : selectedDate === 'week' ? classicW : classicM;
          break;
        case 'koreanMusic':
          data = selectedDate === 'day' ? koreanMusic : selectedDate === 'week' ? koreanMusicW : koreanMusicM;
          break;
        case 'popularMusic':
          data = selectedDate === 'day' ? popularMusic : selectedDate === 'week' ? popularMusicW : popularMusicM;
          break;
        case 'dance':
          data = selectedDate === 'day' ? dance : selectedDate === 'week' ? danceW : danceM;
          break;
        case 'popularDance':
          data = selectedDate === 'day' ? popularDance : selectedDate === 'week' ? popularDanceW : popularDanceM;
          break;
        case 'circusMagice':
          data = selectedDate === 'day' ? circusMagice : selectedDate === 'week' ? circusMagiceW : circusMagiceM;
          break;
        case 'compound':
          data = selectedDate === 'day' ? compound : selectedDate === 'week' ? compoundW : compoundM;
          break;
        case 'kid':
          data = selectedDate === 'day' ? kid : selectedDate === 'week' ? kidW : kidM;
          break;
        case 'open':
          data = selectedDate === 'day' ? open : selectedDate === 'week' ? openW : openM;
          break;
        default:
          data = [];
      }
    } else {
      // Area-based data handling can be added here
      data = [];
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
        className={genreCategoryButton === 'classic' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('classic')}>
        서양음악
      </button>
      <button
        className={genreCategoryButton === 'koreanMusic' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('koreanMusic')}>
        한국음악
      </button>
      <button
        className={genreCategoryButton === 'popularMusic' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('popularMusic')}>
        대중음악
      </button>
      <button
        className={genreCategoryButton === 'dance' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('dance')}>
        무용
      </button>
      <button
        className={genreCategoryButton === 'popularDance' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('popularDance')}>
        대중무용
      </button>
      <button
        className={genreCategoryButton === 'circusMagice' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('circusMagice')}>
        서커스/마술
      </button>
      <button
        className={genreCategoryButton === 'compound' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('compound')}>
        복합
      </button>
      <button
        className={genreCategoryButton === 'kid' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('kid')}>
        아동
      </button>
      <button
        className={genreCategoryButton === 'open' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setGenreCategoryButton('open')}>
        오픈런
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
        className={areaCategoryButton === 'busan' ? 'genre-area-rank-category-click' : ''}
        onClick={() => setAreaCategoryButton('busan')}>
        부산
      </button>
    </>
  );

  const GenreClick = () => {
    setSelectedRank('genre');
    setAreaCategoryButton('seoul');
  };
  const areaClick = () => {
    setSelectedRank('area');
    setGenreCategoryButton('play');
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
