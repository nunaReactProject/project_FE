import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchTicketOpen = async () => {
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);
  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/pblprfr',
    params: {
      cpage: 1,
      rows: 5,
      prfstate: '02'
    }
  });
  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

export const useTicketOpenQuery = () => {
  return useQuery({
    queryKey: ['ticket-open'],
    queryFn: fetchTicketOpen,
    refetchOnWindowFocus: false,
    select: (result) => result
  });
};
