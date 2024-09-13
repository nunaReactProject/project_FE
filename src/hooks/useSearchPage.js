import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

// 날짜 포맷을 YYYYMMDD 형식으로 변환하는 함수
const formatDate = (date) => {
  return date.toISOString().split('T')[0].replace(/-/g, '');
};

// API 호출 함수
const fetchSearchMusical = async (key, regionCode, stateCodes, categoryCodes, startDate, endDate, kindMoad) => {
  const today = new Date();

  // 시작일과 종료일이 주어지지 않으면 기본값 설정
  const stdate = startDate
    ? formatDate(new Date(startDate))
    : formatDate(new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())); // 1년 전
  const eddate = endDate
    ? formatDate(new Date(endDate))
    : formatDate(new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())); // 1년 후

  // URL 생성
  const url = `/pblprfr?stdate=${stdate}&eddate=${eddate}&cpage=1&rows=500&shprfnm=${encodeURIComponent(key)}&signgucode=${regionCode}&prfstate=${stateCodes}&shcate=${categoryCodes}&kidstate=${kindMoad}`;

  // URL 로그 출력
  console.log('API URL:', url);

  const response = await productOpenApi({
    method: 'get',
    url: url // 생성한 URL 사용
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

// 커스텀 훅
export const useSearchMusical = (
  key,
  kindMoad, // kindMoad 매개변수 추가
  regionCode,
  stateCodes,
  categoryCodes,
  shouldFetch,
  page,
  itemsPerPage,
  startDate,
  endDate
) => {
  return useQuery({
    queryKey: ['search-musical', kindMoad, key, regionCode, stateCodes, categoryCodes, startDate, endDate, page], // 키에 시작일과 종료일 추가
    queryFn: () => fetchSearchMusical(key, regionCode, stateCodes, categoryCodes, startDate, endDate, kindMoad), // kindMoad 포함
    select: (result) => result.dbs.db,
    enabled: shouldFetch // shouldFetch가 true일 때만 쿼리 실행
  });
};
