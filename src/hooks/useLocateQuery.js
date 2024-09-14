import { useQuery } from '@tanstack/react-query';
import { productDetailApi, productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchLocate = async (id) => {
  const response = await productOpenApi({
    method: 'get',
    url: `/prfplc/${id}`
  });
  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  console.log(jsonData);
  return jsonData;
};

export const useLocateQuery = (id) => {
  return useQuery({
    queryKey: ['locate', id],
    queryFn: () => fetchLocate(id),
    select: (result) => result.dbs.db
  });
};
