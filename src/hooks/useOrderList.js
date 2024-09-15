import { useQuery } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchOrderList = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  if (query) {
    const response = await serviceApi.get(`/product?${query}`);
    return response;
  }
};

export const useOrderListQuery = (params) => {
  return useQuery({
    queryKey: ['orderlist', params],
    queryFn: () => fetchOrderList(params),
    select: (result) => result.data.data
  });
};
