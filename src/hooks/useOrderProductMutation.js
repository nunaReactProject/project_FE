import { useMutation } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchLogin = async (product) => {
  const response = await serviceApi.post('/product', product);
  return response;
};

export const useOrderMutation = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: ({ product }) => fetchLogin(product)
  });
};
