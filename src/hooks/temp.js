import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchtemp = async () => {
  const response = await productOpenApi({
    method: 'get',
    url: '/prfplc/FC001247'
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);

  return jsonData;
};

export const useDetail = () => {
  return useQuery({
    queryKey: ['temp'],
    queryFn: fetchtemp,
    select: (result) => result.dbs
  });
};
