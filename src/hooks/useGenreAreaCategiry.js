import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchGenreRank = async ({ ststype, date, catecode }) => {
  const response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: ststype,
      date: date,
      catecode: catecode
    }
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);

  return jsonData;
};

export const useGenreRank = ({ ststype, date, catecode }) => {
  return useQuery({
    queryKey: ['boxoffice', { ststype, date, catecode }],
    queryFn: () => fetchGenreRank({ ststype, date, catecode }),
    select: (response) => response
  });
};

const fetchAreaRank = async ({ ststype, date, area }) => {
  const response = await productOpenApi({
    method: 'get',
    url: `/boxoffice?ststype=${ststype}&date=${date}&area=${area}`
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);

  return jsonData;
};

export const useAreaRank = ({ ststype, date, area }) => {
  return useQuery({
    queryKey: ['boxoffice', { ststype, date, area }],
    queryFn: () => fetchAreaRank({ ststype, date, area }),
    select: (response) => response
  });
};
