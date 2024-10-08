import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBanner = async () => {
  const response = await axios.get('/data.json');

  return response;
};

export const useBannerQuery = () => {
  return useQuery({
    queryKey: ['banner'],
    queryFn: fetchBanner,
    refetchOnWindowFocus: false,
    select: (result) => result.data.banner
  });
};
