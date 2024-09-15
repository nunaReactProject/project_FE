import { useQuery } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchOrderList = async () => {
  const response = await serviceApi.get('/product');
  return response;
};

export const useOrderListQuery = () => {
  return useQuery({
    queryKey: ['orderlist'],
    queryFn: fetchOrderList,
    select: (result) => result.data.data
  });
};
