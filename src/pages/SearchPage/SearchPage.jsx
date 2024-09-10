import React, { useState, useEffect } from 'react';
import { useSearchMusical } from '../../hooks/useSearchPage';
import { Container } from './SearchPage.styled';

const SearchPage = () => {
  const { data } = useSearchMusical();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMusicals, setFilteredMusicals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (data && data.db) {
      setFilteredMusicals(data.db);
    }
  }, [data]);

  const handleSearch = () => {
    if (data && data.db) {
      const results = data.db.filter((musical) => musical.prfnm.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredMusicals(results);
      setCurrentPage(1); // 검색 후 페이지를 1로 리셋
    }
  };

  // 현재 페이지에 맞는 공연 목록 가져오기
  const indexOfLastMusical = currentPage * itemsPerPage;
  const indexOfFirstMusical = indexOfLastMusical - itemsPerPage;
  const currentMusicals = filteredMusicals.slice(indexOfFirstMusical, indexOfLastMusical);

  // 페이지 수 계산
  const totalPages = Math.ceil(filteredMusicals.length / itemsPerPage);

  return (
    <Container>
      <div>
        <h1>공연 검색</h1>
        <input
          type='text'
          placeholder='공연 제목 검색'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
        />
        <button onClick={handleSearch}>검색</button>
        <ul>
          {currentMusicals.length > 0 ? (
            currentMusicals.map((musical, index) => (
              <li key={index}>
                {musical.prfnm}
                <img src={musical.poster} style={{ width: '100px', height: '200px' }} alt='포스터' />
                <p>{musical.fcltynm}</p>
                <p>
                  {musical.prfpdfrom}~{musical.prfpdto}
                </p>
              </li>
            ))
          ) : (
            <li>결과가 없습니다.</li> // 결과가 없을 때 메시지
          )}
        </ul>
        {/* 페이지네이션 버튼 */}
        <div>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            이전
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}>
            다음
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SearchPage;
