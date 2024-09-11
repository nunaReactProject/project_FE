import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

// day
const fetchGenrePlayDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);
  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'AAAA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);

  return jsonData;
};

const fetchGenreMusicalDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'GGGA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreClassicDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'CCCA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreKoreanMusicDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'CCCC'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenrePopularMusicDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'CCCD'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreDanceDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'BBBC'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenrePopularDanceDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'BBBR'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreCircusMagiceDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'EEEB'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreCompoundDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'EEEA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreKidDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'KID'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreOpenDay = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 2);

  const formattedYesterdayDate = getFormattedDate(yesterdayDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'day',
      date: formattedYesterdayDate,
      catecode: 'OPEN'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

//Week @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const fetchGenrePlayWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'AAAA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreMusicalWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'GGGA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreClassicWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'CCCA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreKoreanMusicWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'CCCC'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenrePopularMusicWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'CCCD'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreDanceWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'BBBC'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenrePopularDanceWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'BBBR'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreCircusMagiceWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'EEEB'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreCompoundWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'EEEA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreKidWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'KID'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreOpenWeek = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'week',
      date: formattedCurrentDate,
      catecode: 'OPEN'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

// month @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const fetchGenrePlayMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'AAAA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreMusicalMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'GGGA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreClassicMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'CCCA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreKoreanMusicMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'CCCC'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenrePopularMusicMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'CCCD'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};
const fetchGenreDanceMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'BBBC'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenrePopularDanceMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'BBBR'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreCircusMagiceMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'EEEB'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreCompoundMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'EEEA'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreKidMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'KID'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

const fetchGenreOpenMonth = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const formattedCurrentDate = getFormattedDate(currentDate);

  let response = await productOpenApi({
    method: 'get',
    url: '/boxoffice',
    params: {
      ststype: 'month',
      date: formattedCurrentDate,
      catecode: 'OPEN'
    }
  });

  const parser = new XMLParser();
  let jsonData = parser.parse(response.data);
  return jsonData;
};

// day @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
export const useGenreOpenDay = () => {
  return useQuery({
    queryKey: ['genre-open-categories'],
    queryFn: fetchGenreOpenDay,
    select: (result) => result
  });
};

export const useGenreKidDay = () => {
  return useQuery({
    queryKey: ['genre-kid-categories'],
    queryFn: fetchGenreKidDay,
    select: (result) => result
  });
};

export const useGenreCompoundDay = () => {
  return useQuery({
    queryKey: ['genre-compound-categories'],
    queryFn: fetchGenreCompoundDay,
    select: (result) => result
  });
};
export const useGenreCircusMagiceDay = () => {
  return useQuery({
    queryKey: ['genre-circus-magice-categories'],
    queryFn: fetchGenreCircusMagiceDay,
    select: (result) => result
  });
};
export const useGenrePopularDanceDay = () => {
  return useQuery({
    queryKey: ['genre-popular-dance-categories'],
    queryFn: fetchGenrePopularDanceDay,
    select: (result) => result
  });
};
export const useGenreDanceDay = () => {
  return useQuery({
    queryKey: ['genre-dance-categories'],
    queryFn: fetchGenreDanceDay,
    select: (result) => result
  });
};

export const useGenrePopularMusicDay = () => {
  return useQuery({
    queryKey: ['genre-popular-music-categories'],
    queryFn: fetchGenrePopularMusicDay,
    select: (result) => result
  });
};

export const useGenreKoreanMusicDay = () => {
  return useQuery({
    queryKey: ['genre-korean-music-categories'],
    queryFn: fetchGenreKoreanMusicDay,
    select: (result) => result
  });
};

export const useGenreClassicDay = () => {
  return useQuery({
    queryKey: ['genre-classic-categories'],
    queryFn: fetchGenreClassicDay,
    select: (result) => result
  });
};

export const useGenrePlayDay = () => {
  return useQuery({
    queryKey: ['genre-play-categories'],
    queryFn: fetchGenrePlayDay,
    select: (result) => result
  });
};

export const useGenreMusicalDay = () => {
  return useQuery({
    queryKey: ['genre-musical-categories'],
    queryFn: fetchGenreMusicalDay,
    select: (result) => result
  });
};

// month @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

export const useGenreOpenMonth = () => {
  return useQuery({
    queryKey: ['genre-open-categories-month'],
    queryFn: fetchGenreOpenMonth,
    select: (result) => result
  });
};
export const useGenreKidMonth = () => {
  return useQuery({
    queryKey: ['genre-kid-categories-month'],
    queryFn: fetchGenreKidMonth,
    select: (result) => result
  });
};

export const useGenreCompoundMonth = () => {
  return useQuery({
    queryKey: ['genre-compound-categories-month'],
    queryFn: fetchGenreCompoundMonth,
    select: (result) => result
  });
};
export const useGenreCircusMagiceMonth = () => {
  return useQuery({
    queryKey: ['genre-circus-magice-categories-month'],
    queryFn: fetchGenreCircusMagiceMonth,
    select: (result) => result
  });
};
export const useGenrePopularDanceMonth = () => {
  return useQuery({
    queryKey: ['genre-popular-dance-categories-month'],
    queryFn: fetchGenrePopularDanceMonth,
    select: (result) => result
  });
};
export const useGenreDanceMonth = () => {
  return useQuery({
    queryKey: ['genre-dance-categories-month'],
    queryFn: fetchGenreDanceMonth,
    select: (result) => result
  });
};

export const useGenrePopularMusicMonth = () => {
  return useQuery({
    queryKey: ['genre-popular-music-categories-month'],
    queryFn: fetchGenrePopularMusicMonth,
    select: (result) => result
  });
};

export const useGenreKoreanMusicMonth = () => {
  return useQuery({
    queryKey: ['genre-korean-music-categories-month'],
    queryFn: fetchGenreKoreanMusicMonth,
    select: (result) => result
  });
};

export const useGenreClassicMonth = () => {
  return useQuery({
    queryKey: ['genre-classic-categories-month'],
    queryFn: fetchGenreClassicMonth,
    select: (result) => result
  });
};

export const useGenrePlayMonth = () => {
  return useQuery({
    queryKey: ['genre-play-categories-month'],
    queryFn: fetchGenrePlayMonth,
    select: (result) => result
  });
};

export const useGenreMusicalMonth = () => {
  return useQuery({
    queryKey: ['genre-musical-categories-month'],
    queryFn: fetchGenreMusicalMonth,
    select: (result) => result
  });
};

// week @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
export const useGenreOpenWeek = () => {
  return useQuery({
    queryKey: ['genre-open-categories-week'],
    queryFn: fetchGenreOpenWeek,
    select: (result) => result
  });
};
export const useGenreKidWeek = () => {
  return useQuery({
    queryKey: ['genre-kid-categories-week'],
    queryFn: fetchGenreKidWeek,
    select: (result) => result
  });
};

export const useGenreCompoundWeek = () => {
  return useQuery({
    queryKey: ['genre-compound-categories-week'],
    queryFn: fetchGenreCompoundWeek,
    select: (result) => result
  });
};
export const useGenreCircusMagiceWeek = () => {
  return useQuery({
    queryKey: ['genre-circus-magice-categories-week'],
    queryFn: fetchGenreCircusMagiceWeek,
    select: (result) => result
  });
};
export const useGenrePopularDanceWeek = () => {
  return useQuery({
    queryKey: ['genre-popular-dance-categories-week'],
    queryFn: fetchGenrePopularDanceWeek,
    select: (result) => result
  });
};
export const useGenreDanceWeek = () => {
  return useQuery({
    queryKey: ['genre-dance-categories-week'],
    queryFn: fetchGenreDanceWeek,
    select: (result) => result
  });
};

export const useGenrePopularMusicWeek = () => {
  return useQuery({
    queryKey: ['genre-popular-music-categories-week'],
    queryFn: fetchGenrePopularMusicWeek,
    select: (result) => result
  });
};

export const useGenreKoreanMusicWeek = () => {
  return useQuery({
    queryKey: ['genre-korean-music-categories-week'],
    queryFn: fetchGenreKoreanMusicWeek,
    select: (result) => result
  });
};

export const useGenreClassicWeek = () => {
  return useQuery({
    queryKey: ['genre-classic-categories-week'],
    queryFn: fetchGenreClassicWeek,
    select: (result) => result
  });
};

export const useGenrePlayWeek = () => {
  return useQuery({
    queryKey: ['genre-play-categories-week'],
    queryFn: fetchGenrePlayWeek,
    select: (result) => result
  });
};

export const useGenreMusicalWeek = () => {
  return useQuery({
    queryKey: ['genre-musical-categories-week'],
    queryFn: fetchGenreMusicalWeek,
    select: (result) => result
  });
};
