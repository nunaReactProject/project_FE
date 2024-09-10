import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchRankProduct = async ({ ststype, date }) => {
  const response = await productOpenApi({
    method: 'get',
    url: `/boxoffice?ststype=${ststype}&date=${date}`
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

export const useRankProductQuery = ({ ststype, date }) => {
  return useQuery({
    queryKey: ['boxoffice', { ststype, date }],
    queryFn: () => fetchRankProduct({ ststype, date }),
    select: (response) => response.boxofs.boxof
  });
};
