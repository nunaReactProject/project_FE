import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import axios from 'axios';
const OPEN_API_SERVICE_KEY = process.env.REACT_APP_OPEN_API_SERVICE_KEY;

console.log('temp');

const fetchtemp = () => {
  return productOpenApi({
    method: 'get',
    url: '/prfplc/FC001247'
  });
};

export const useDetail = () => {
  return useQuery({
    queryKey: ['temp'],
    queryFn: fetchtemp
  });
};
