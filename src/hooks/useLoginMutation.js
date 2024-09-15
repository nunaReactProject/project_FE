import { useMutation } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchLogin = async (info) => {
  const response = await serviceApi.post('/auth/basiclogin', info);

  return response;
};

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: ({ info }) => fetchLogin(info)
  });
};
