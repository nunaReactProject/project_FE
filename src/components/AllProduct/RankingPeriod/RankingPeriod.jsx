import React, { useState } from 'react';
import * as S from './RankingPeriod.styled.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

const RankingPeriod = ({ setStstype, setDate }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [showCalendar, setShowCalendar] = useState(false);
  const statusChange = (type) => {
    setStstype(type);
  };
  const formatLongDate = (locale, date) => {
    return format(date, 'yyyyMMdd');
  };
  const onChange = (date) => {
    setSelectedDate(date);
    const formattedDate = formatLongDate(undefined, date);
    setDate(formattedDate);
    setShowCalendar(false);
  };

  return (
    <S.RankingReriod>
      <S.CalendarButton onClick={() => setShowCalendar((prev) => !prev)}>
        {showCalendar ? '달력 닫기' : '달력'}
      </S.CalendarButton>
      {showCalendar && (
        <S.CalendarWrapper>
          <Calendar
            calendarType='gregory'
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            onChange={onChange}
            value={selectedDate}
            formatLongDate={formatLongDate}
            maxDate={today}
          />
        </S.CalendarWrapper>
      )}

      <S.StatusTypeList>
        <S.StatusButton onClick={() => statusChange('day')}>일간</S.StatusButton>
        <S.StatusButton onClick={() => statusChange('week')}>주간</S.StatusButton>
        <S.StatusButton onClick={() => statusChange('month')}>월간</S.StatusButton>
      </S.StatusTypeList>
    </S.RankingReriod>
  );
};

export default RankingPeriod;
