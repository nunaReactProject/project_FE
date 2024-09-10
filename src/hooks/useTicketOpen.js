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

  const formattedCurrentDate = getFormattedDate(currentDate);
  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  // 첫 번째 API 요청
  let response = await productOpenApi({
    method: 'get',
    url: '/pblprfr',
    params: {
      stdate: formattedCurrentDate,
      cpage: 1,
      rows: 5,
      prfstate: '02',
      signgucode: '11',
      signgucodesub: '1111'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);

  // dbs의 개수가 5 미만일 때 두 번째 요청
  if (jsonData.dbs.db.length < 5) {
    response = await productOpenApi({
      method: 'get',
      url: '/pblprfr',
      params: {
        stdate: formattedYesterdayDate,
        eddate: formattedCurrentDate,
        cpage: 1,
        rows: 5,
        prfstate: '02',
        signgucode: '11',
        signgucodesub: '1111'
      }
    });

    jsonData = parser.parse(response.data);
  }

  const mt20ids = jsonData.dbs.db.map((item) => item.mt20id).filter((id) => id);

  const fetchPerformanceDetails = async (id) => {
    const response = await productOpenApi({
      method: 'get',
      url: `/pblprfr/${id}`
    });
    const xmlData = response.data;
    const jsonData = parser.parse(xmlData);
    return jsonData;
  };
  const performanceDetails = await Promise.all(mt20ids.map(fetchPerformanceDetails));

  return performanceDetails;
};

export const useTicketOpenQuery = () => {
  return useQuery({
    queryKey: ['ticket-open'],
    queryFn: fetchTicketOpen,
    select: (result) => result
  });
};
