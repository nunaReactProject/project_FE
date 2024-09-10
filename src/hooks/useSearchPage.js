import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

// 날짜 포맷을 YYYYMMDD 형식으로 변환하는 함수
const formatDate = (date) => {
  return date.toISOString().split('T')[0].replace(/-/g, '');
};

const fetchSearchMusical = async () => {
  const today = new Date();

  const stdate = formatDate(new Date(today.getFullYear() - 3, today.getMonth(), today.getDate())); // 1년 전
  const eddate = formatDate(new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())); // 1년 후

  const response = await productOpenApi({
    method: 'get',
    url: `/pblprfr?stdate=${stdate}&eddate=${eddate}&cpage=1&rows=500`
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

export const useSearchMusical = () => {
  return useQuery({
    queryKey: ['search-musical'],
    queryFn: fetchSearchMusical,
    select: (result) => result.dbs
  });
};
