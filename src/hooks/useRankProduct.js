import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchRankProduct = async ({ ststype, date, catecode, area }) => {
  const response = await productOpenApi({
    method: 'get',
    url: `/boxoffice?ststype=${ststype}&date=${date}&catecode=${catecode}&area=${area}`
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

export const useRankProductQuery = ({ ststype, date, catecode, area }) => {
  return useQuery({
    queryKey: ['boxoffice', { ststype, date, catecode, area }],
    queryFn: () => fetchRankProduct({ ststype, date, catecode, area }),
    select: (response) => response.boxofs.boxof
  });
};
