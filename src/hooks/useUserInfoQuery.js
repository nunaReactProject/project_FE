import { useQuery } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchUserInfo = async () => {
  const response = await serviceApi.get('/user');
  return response;
};

export const useUserInfoQuery = () => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    staleTime: 0,
    retry: false
  });
};
