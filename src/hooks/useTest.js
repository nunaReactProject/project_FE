import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchtemp = async () => {
  const response = await productOpenApi({
    method: 'get',
    url: '/pblprfr',
    params: {
      stdate: 20240913,
      cpage: 1,
      rows: 5,
      prfstate: '02'
    }
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);

  return jsonData;
};

export const useTest = () => {
  return useQuery({
    queryKey: ['temp'],
    queryFn: fetchtemp,
    select: (result) => result.dbs
  });
};
