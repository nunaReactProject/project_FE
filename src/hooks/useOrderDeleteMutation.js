import { useMutation } from '@tanstack/react-query';
import { serviceApi } from '../Api';

const fetchOrderDelete = async (_id) => {
  const response = await serviceApi.delete(`/product/${_id}`);

  return response;
};

export const useOrderDeleteMutation = () => {
  return useMutation({
    mutationKey: ['orderdelete'],
    mutationFn: ({ _id }) => fetchOrderDelete(_id)
  });
};
