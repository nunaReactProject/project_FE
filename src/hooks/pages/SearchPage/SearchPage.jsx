import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchMusical } from '../../hooks/useSearchPage';
import {
  Searchbox,
  Container,
  TicketUl,
  TicketLi,
  Ticketimg,
  Ticketbtn,
  Tickettxt,
  Button,
  Maincontent,
  Filterbox
} from './SearchPage.styled';

const SearchPage = () => {
  const { data } = useSearchMusical();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || '');
  const [filteredMusicals, setFilteredMusicals] = useState([]);
  const [displayedMusicals, setDisplayedMusicals] = useState([]);
  const [genreFilter, setGenreFilter] = useState([]);
  const [areaFilter, setareaFilter] = useState([]);
  const [kidstateFilter, setKidstateFilter] = useState(null);
  const [showUpcoming, setShowUpcoming] = useState(false); // "공연예정" 필터 상태
  const [showOngoing, setShowOngoing] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const itemsPerPage = 10;

  useEffect(() => {
    if (data && data.db) {
      setFilteredMusicals(data.db);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.db) {
      let results = data.db;

      // ... (기존 검색어 및 kidstate 필터링 로직은 유지)

      // 장르 필터링 (교집합)
      if (genreFilter.length > 0) {
        results = results.filter((musical) => genreFilter.includes(musical.genrenm));
      }

      // 지역 필터링 (교집합)
      if (areaFilter.length > 0) {
        results = results.filter((musical) => areaFilter.includes(musical.area));
      }

      // "공연상태" 필터링
      if (showUpcoming) {
        results = results.filter((musical) => musical.prfstate === '공연예정');
      } else if (showOngoing) {
        results = results.filter((musical) => musical.prfstate === '공연중');
      } else if (showCompleted) {
        results = results.filter((musical) => musical.prfstate === '공연완료');
      }

      setFilteredMusicals(results);
      setDisplayedMusicals(results.slice(0, itemsPerPage));
    }
  }, [
    searchTerm,
    genreFilter,
    areaFilter,
    kidstateFilter,
    showUpcoming,
    showCompleted,
    showOngoing,
    startDate,
    endDate,
    data
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      alert('검색어가 없습니다.');
      window.location.href = '/search';
    } else {
      setSearchParams({ query: searchTerm });
      const filteredResults = filteredMusicals.filter((musical) =>
        musical.prfnm.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedMusicals(filteredResults.slice(0, itemsPerPage));
    }
  };

  const loadMoreMusicals = () => {
    const newMusicals = filteredMusicals.slice(displayedMusicals.length, displayedMusicals.length + itemsPerPage);
    setDisplayedMusicals((prev) => [...prev, ...newMusicals]);
  };

  const sortByStartDate = () => {
    const sortedMusicals = [...filteredMusicals].sort((a, b) => new Date(a.prfpdfrom) - new Date(b.prfpdfrom));
    setFilteredMusicals(sortedMusicals);
    setDisplayedMusicals(sortedMusicals.slice(0, itemsPerPage));
  };
  const sortByEndDate = () => {
    const sortedMusicals = [...filteredMusicals].sort((a, b) => new Date(b.prfpdto) - new Date(a.prfpdto));
    setFilteredMusicals(sortedMusicals);
    setDisplayedMusicals(sortedMusicals.slice(0, itemsPerPage));
  };

  const showAllMusicals = () => {
    setDisplayedMusicals(filteredMusicals);
  };

  const toggleGenreFilter = (genre) => {
    setGenreFilter((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]));
  };

  const toggleareaFilter = (area) => {
    setareaFilter((prev) => (prev.includes(area) ? prev.filter((r) => r !== area) : [...prev, area]));
  };

  const isGenreSelected = (genre) => genreFilter.includes(genre);
  const isareaSelected = (area) => areaFilter.includes(area);
  console.log('Filtered Musicals:', filteredMusicals);
  const resetFilters = () => {
    setSearchTerm('');
    setGenreFilter([]);
    setareaFilter([]);
    setKidstateFilter(null);
    setShowUpcoming(false);
    setStartDate('');
    setEndDate('');
    setFilteredMusicals(data.db || []);
    setDisplayedMusicals(data.db ? data.db.slice(0, itemsPerPage) : []);
  };
  return (
    <Container>
      <Searchbox>
        <h1>
          "{searchParams.get('query')}"에 대한 검색 결과는 {filteredMusicals.length}건 입니다.
        </h1>
        <form onSubmit={handleSearch}>
          <input
            type='search'
            placeholder='공연 제목 검색'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
            // onFocus={() => setSearchTerm('')} // 검색창 클릭 시 텍스트 지우기
          />
          <Button type='submit'>검색</Button>
        </form>
        <Button onClick={sortByStartDate}>공연 시작일 순으로 정렬</Button>
        <Button onClick={sortByEndDate}>공연 종료일 순으로 정렬</Button>
        <Button onClick={showAllMusicals}>전체 보기</Button>
      </Searchbox>
      <Maincontent>
        <Filterbox>
          <div>
            <Button onClick={resetFilters}>모든 필터 초기화</Button>
          </div>
          <div>
            <Button onClick={() => setGenreFilter([])}>ALL</Button>
            <Button onClick={() => toggleGenreFilter('뮤지컬')} className={isGenreSelected('뮤지컬') ? 'on' : ''}>
              뮤지컬
            </Button>
            <Button onClick={() => toggleGenreFilter('연극')} className={isGenreSelected('연극') ? 'on' : ''}>
              연극
            </Button>
            <Button onClick={() => toggleGenreFilter('대중음악')} className={isGenreSelected('대중음악') ? 'on' : ''}>
              대중음악
            </Button>
            <Button
              onClick={() => toggleGenreFilter('서양음악(클래식)')}
              className={isGenreSelected('서양음악(클래식)') ? 'on' : ''}>
              클래식
            </Button>
          </div>
          <div>
            <Button onClick={() => setKidstateFilter(null)}>전연령</Button>
            <Button onClick={() => setKidstateFilter(true)} className={kidstateFilter === true ? 'on' : ''}>
              아동용
            </Button>
          </div>{' '}
          // 버튼 클릭 시 변경된 핸들러 사용
          <div>
            <Button onClick={handleUpcomingToggle} className={showUpcoming ? 'on' : ''}>
              공연예정
            </Button>
            <Button onClick={handleOngoingToggle} className={showOngoing ? 'on' : ''}>
              공연중
            </Button>
            <Button onClick={handleCompletedToggle} className={showCompleted ? 'on' : ''}>
              공연완료
            </Button>
          </div>
          <div>
            <h3>지역 선택:</h3>
            <Button onClick={() => setareaFilter([])}>전국</Button>
            <Button onClick={() => toggleareaFilter('서울특별시')} className={isareaSelected('서울특별시') ? 'on' : ''}>
              서울
            </Button>
            <Button onClick={() => toggleareaFilter('강원도')} className={isareaSelected('강원도') ? 'on' : ''}>
              강원
            </Button>
            <Button onClick={() => toggleareaFilter('경기도')} className={isareaSelected('경기도') ? 'on' : ''}>
              경기
            </Button>
            <Button onClick={() => toggleareaFilter('전라북도')} className={isareaSelected('전라북도') ? 'on' : ''}>
              전북
            </Button>
            <Button onClick={() => toggleareaFilter('전라남도')} className={isareaSelected('전라남도') ? 'on' : ''}>
              전남
            </Button>
            <Button onClick={() => toggleareaFilter('경상북도')} className={isareaSelected('경상북도') ? 'on' : ''}>
              경북
            </Button>
            <Button onClick={() => toggleareaFilter('경상남도')} className={isareaSelected('경상남도') ? 'on' : ''}>
              경남
            </Button>
            <Button
              onClick={() => toggleareaFilter('제주특별자치도')}
              className={isareaSelected('제주특별자치도') ? 'on' : ''}>
              제주
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <label htmlFor='startDate'>시작일:</label>
              <input type='date' id='startDate' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor='endDate'>종료일:</label>
              <input type='date' id='endDate' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>
        </Filterbox>
        <div>
          <TicketUl>
            {displayedMusicals.map((musical, index) => (
              <TicketLi key={index}>
                <Ticketimg>
                  <img src={musical.poster} style={{ width: '110px', height: '134px' }} alt='포스터' />
                </Ticketimg>
                <Tickettxt>
                  {musical.prfnm}
                  <p>{musical.fcltynm}</p>
                  <p>
                    {musical.prfpdfrom === musical.prfpdto
                      ? musical.prfpdfrom
                      : `${musical.prfpdfrom}~${musical.prfpdto}`}
                  </p>
                </Tickettxt>
                <Ticketbtn>
                  <Button>예매하기</Button>
                </Ticketbtn>
              </TicketLi>
            ))}
          </TicketUl>
          {displayedMusicals.length < filteredMusicals.length && <Button onClick={loadMoreMusicals}>더보기</Button>}
        </div>
      </Maincontent>
    </Container>
  );
};

export default SearchPage;
