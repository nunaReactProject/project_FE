import { useQuery } from '@tanstack/react-query';
import { productDetailApi, productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchTheater = async (id) => {
  const response = await productOpenApi({
    method: 'get',
    url: `/pblprfr/${id}`
  });
  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  console.log(jsonData);
  return jsonData;
};

export const useTheaterQuery = (id) => {
  return useQuery({
    queryKey: ['theater', id],
    queryFn: () => fetchTheater(id),
    select: (result) => result.dbs.db
  });
};
