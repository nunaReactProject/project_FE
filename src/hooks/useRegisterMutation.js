import { useMutation } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchRegister = async (userInfo) => {
  const response = await serviceApi.post('/user', userInfo);

  return response;
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: ({ userInfo }) => fetchRegister(userInfo)
  });
};
