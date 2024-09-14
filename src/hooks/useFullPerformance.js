import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchFullPerformance = async () => {
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  // 첫 번째 API 요청
  let response = await productOpenApi({
    method: 'get',
    url: '/pblprfr',
    params: {
      stdate: formattedCurrentDate,
      cpage: 1,
      rows: 16,
      prfstate: '01'
    }
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

export const useFullPerformanceQuery = () => {
  return useQuery({
    queryKey: ['full-performance'],
    queryFn: fetchFullPerformance,
    select: (result) => result
  });
};
