import React, { useEffect, useState } from 'react';
import { useSearchMusical } from '../../hooks/useSearchPage';
import {
  Button,
  Container,
  Searchbox,
  Filterbox,
  Maincontent,
  TicketUl,
  TicketLi,
  Ticketimg,
  Ticketbtn,
  Tickettxt,
  Spinerbox,
  FilterButton
} from './SearchPage.styled';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [key, setKey] = useState('');
  const [submittedKey, setSubmittedKey] = useState('');
  const [regionCodes, setRegionCodes] = useState([]);
  const [stateCodes, setStateCodes] = useState(['01', '02']);
  const [categoryCodes, setCategoryCodes] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(''); // 시작일 상태 추가
  const [endDate, setEndDate] = useState(''); // 종료일 상태 추가
  const [kindMoad, setKindMoad] = useState('N'); // 아동용 상태 추가
  const [sortOption, setSortOption] = useState('showAllMusicals'); // 정렬 옵션 추가

  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    console.log(query.get('name'));
    onSearch();
  }, [query]);

  const onNavigateDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  // 커스텀 훅 사용
  const {
    data = [],
    error,
    isLoading
  } = useSearchMusical(
    submittedKey,
    kindMoad, // kindMoad 추가
    regionCodes.join('|'),
    stateCodes.join('|'),
    categoryCodes.join('|'),
    shouldFetch,
    page,
    itemsPerPage,
    startDate,
    endDate
  );

  // 전체 데이터를 저장할 상태 추가
  const [allData, setAllData] = useState([]);

  // 데이터가 변경될 때마다 전체 데이터를 업데이트
  React.useEffect(() => {
    if (data.length > 0) {
      setAllData(data); // 처음 검색할 때 전체 데이터를 저장
    }
  }, [data]);

  const sortedData = () => {
    const sorted = [...allData]; // 전체 데이터 복사
    if (sortOption === 'startDate') {
      return sorted.sort((a, b) => new Date(a.prfpdfrom) - new Date(b.prfpdfrom));
    } else if (sortOption === 'endDate') {
      return sorted.sort((a, b) => new Date(b.prfpdto) - new Date(a.prfpdto));
    }
    return sorted; // 기본적으로 전체 보기
  };

  const categories = [
    { code: 'GGGA', name: '뮤지컬' },
    { code: 'CCCD', name: '콘서트' },
    { code: 'CCCA|CCCC', name: '클래식/국악' },
    { code: 'BBBC|BBBR', name: '무용' },
    { code: 'KID|EEEB', name: '아동/서커스/마술' },
    { code: 'AAAA', name: '연극' }
  ];

  const regions = [
    { code: '11', name: '서울' },
    { code: '28|41', name: '경기/인천' },
    { code: '30|36', name: '대전/세종' },
    { code: '27|26|31', name: '대구/부산/울산' },
    { code: '43|44|51', name: '충청/강원' },
    { code: '45|46|29|47|48', name: '광주/전라/경상' },
    { code: '50', name: '제주' }
  ];

  const states = [
    { code: '01', name: '공연예정' },
    { code: '02', name: '공연중' },
    { code: '03', name: '공연완료' }
  ];

  const handleCategoryChange = (code) => {
    setCategoryCodes((prevCodes) => {
      // 선택된 카테고리의 추가 또는 제거
      if (prevCodes.includes(code)) {
        return prevCodes.filter((categoryCode) => categoryCode !== code);
      }
      return [...prevCodes, code];
    });
  };

  const handleRegionChange = (code) => {
    setRegionCodes((prevCodes) => {
      if (prevCodes.includes(code)) {
        return prevCodes.filter((regionCode) => regionCode !== code);
      } else {
        return [...prevCodes, code];
      }
    });
  };

  const handleStateChange = (code) => {
    setStateCodes((prevCodes) => {
      if (prevCodes.includes(code)) {
        return prevCodes.filter((stateCode) => stateCode !== code);
      } else {
        return [...prevCodes, code];
      }
    });
  };
  const resetFilters = () => {
    setRegionCodes([]);
    setStateCodes(['01', '02']);
    setCategoryCodes([]);
    setShouldFetch(false);
    setPage(1);
    setStartDate('');
    setEndDate('');
    setKindMoad('N');
  };

  const onSearchEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?name=${key}`);
    }
  };

  const onSerachClick = () => {
    navigate(`/search?name=${key}`);
  };

  const onSearch = () => {
    if (!query.get('name').trim()) {
      alert('검색어를 입력해 주세요.');
      return; // 검색어가 없으면 함수를 종료
    }
    setSubmittedKey(query.get('name'));
    setShouldFetch(true);
    setPage(1); // 페이지 초기화
    setKey('');
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // 페이지 증가
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false); // Filterbox 열림 상태
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 화면 크기 상태

  const toggleFilterBox = () => {
    setIsFilterOpen((prev) => !prev); // 열림/닫힘 상태 토글
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // 화면 크기 업데이트
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize); // 리사이즈 이벤트 리스너 추가
    return () => {
      window.removeEventListener('resize', handleResize); // 정리
    };
  }, []);

  return (
    <Container>
      <Searchbox>
        <p>
          키워드 "{submittedKey}"에 대한 검색 결과는 {data.length}건입니다.
        </p>
        {/* <form onSubmit={handleSubmit}> */}
        <input
          type='search'
          placeholder='Search'
          value={key}
          onChange={(e) => setKey(e.target.value)} // 사용자 입력 업데이트
          onKeyDown={(e) => onSearchEnter(e)}
        />
        <Button onClick={onSerachClick}>검색</Button>
        {/* </form> */}
      </Searchbox>
      {isLoading && <Spinerbox></Spinerbox>}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}{' '}
      <Maincontent>
        {isMobile && <FilterButton onClick={toggleFilterBox}>{isFilterOpen ? '필터 닫기' : '필터 열기'}</FilterButton>}
        <Filterbox style={{ display: isFilterOpen || !isMobile ? 'flex' : 'none' }}>
          <div>
            <h2>카테고리</h2>
            {categories.map((category) => (
              <Button
                key={category.code}
                onClick={() => handleCategoryChange(category.code)}
                isActive={categoryCodes.includes(category.code)} // isActive prop 추가
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* 지역 버튼들 */}
          <div>
            <h2>지역</h2>
            {regions.map((region) => (
              <Button
                key={region.code}
                onClick={() => handleRegionChange(region.code)}
                isActive={regionCodes.includes(region.code)} // isActive prop 추가
              >
                {region.name}
              </Button>
            ))}
          </div>

          {/* 공연 상태 버튼들 */}
          <div>
            <h2>공연 상태</h2>
            {states.map((state) => (
              <Button
                key={state.code}
                onClick={() => handleStateChange(state.code)}
                isActive={stateCodes.includes(state.code)} // isActive prop 추가
              >
                {state.name}
              </Button>
            ))}
          </div>

          {/* 아동용 필터 추가 */}
          <div>
            <h2>아동용 필터</h2>
            <Button
              onClick={() => setKindMoad('Y')}
              isActive={kindMoad === 'Y'} // isActive prop 추가
            >
              아동
            </Button>
            <Button
              onClick={() => setKindMoad('N')}
              isActive={kindMoad === 'N'} // isActive prop 추가
            >
              일반
            </Button>
          </div>
          <div className='data_area'>
            <div>
              <label htmlFor='startDate'>시작일:</label>
              <input type='date' id='startDate' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor='endDate'>종료일:</label>
              <input type='date' id='endDate' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>
          <div>
            {' '}
            {/* 초기화 버튼 추가 */}
            <Button onClick={resetFilters} style={{ width: '100%' }}>
              초기화
            </Button>
          </div>
        </Filterbox>
        <div style={{ display: 'grid', gridTemplateRows: '20px auto' }}>
          <select onChange={(e) => setSortOption(e.target.value)} defaultValue='showAllMusicals'>
            <option value='showAllMusicals'>전체 보기</option>
            <option value='startDate'>공연 시작일 순으로 정렬</option>
            <option value='endDate'>공연 종료일 순으로 정렬</option>
          </select>
          <TicketUl>
            {Array.isArray(data) ? (
              sortedData()
                .slice(0, page * itemsPerPage)
                .map((item, index) => (
                  <TicketLi key={index} onClick={() => onNavigateDetailPage(item.mt20id)}>
                    <Ticketimg>
                      <img src={item.poster} style={{ width: '110px', height: '134px' }} alt='포스터' />
                    </Ticketimg>
                    <Tickettxt>
                      {item.prfnm}
                      <p className='ticket_place'>{item.fcltynm}</p>
                      <p className='ticket_period'>
                        {item.prfpdfrom === item.prfpdto ? item.prfpdfrom : `${item.prfpdfrom}~${item.prfpdto}`}
                      </p>
                    </Tickettxt>
                    <Ticketbtn>
                      <Button>예매하기</Button>
                    </Ticketbtn>
                  </TicketLi>
                ))
            ) : (
              <p>결과가 없습니다.</p>
            )}
          </TicketUl>
          {allData.length > page * itemsPerPage && (
            <Button className='data_plus_btn' onClick={loadMore}>
              더 보기
            </Button>
          )}
        </div>
      </Maincontent>
    </Container>
  );
};

export default SearchPage;
