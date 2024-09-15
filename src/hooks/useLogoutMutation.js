import { useMutation } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchLogout = async () => {
  const response = await serviceApi.post('/auth/logout');

  return response;
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: () => fetchLogout()
  });
};
