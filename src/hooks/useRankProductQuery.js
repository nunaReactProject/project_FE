import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchRankProduct = async ({ ststype, date, catecode, area }) => {
  const url =
    catecode || area
      ? `/boxoffice?ststype=${ststype}&date=${date}&catecode=${catecode}&area=${area}`
      : `/boxoffice?ststype=${ststype}&date=${date}`;

  const response = await productOpenApi({
    method: 'get',
    url
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

export const useRankProductQuery = ({ ststype, date, catecode, area }) => {
  return useQuery({
    queryKey: ['boxoffice', { ststype, date, catecode, area }],
    queryFn: () => fetchRankProduct({ ststype, date, catecode, area }),
    select: (response) => response.boxofs.boxof,
    keepPreviousData: true // 이전 데이터를 새로운 데이터가 올 때까지 유지
  });
};
