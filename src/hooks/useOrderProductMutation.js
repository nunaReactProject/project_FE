import { useMutation } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchProduct = async (product) => {
  console.log('pro', product);
  const response = await serviceApi.post('/product', product);
  return response;
};

export const useOrderMutation = () => {
  return useMutation({
    mutationKey: ['productOrder'],
    mutationFn: ({ product }) => fetchProduct(product)
  });
};
