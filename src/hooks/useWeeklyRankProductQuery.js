import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchWeeklyRankProduct = async ({ ststype, date }) => {
  const response = await productOpenApi({
    method: 'get',
    url: `/boxoffice?ststype=${ststype}&date=${date}&limit=5`
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

export const useWeeklyRankProductQuery = ({ ststype, date }) => {
  return useQuery({
    queryKey: ['weeklyBoxOffice', { ststype, date }],
    queryFn: () => fetchWeeklyRankProduct({ ststype, date }),
    select: (response) => response.boxofs.boxof
  });
};
