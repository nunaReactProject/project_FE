import React, { useState } from 'react';
import * as S from './RankingPeriod.styled.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const RankingPeriod = ({ setStstype, setDate }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(() => {
    const savedDate = localStorage.getItem('selectedDate');
    return savedDate ? new Date(savedDate) : new Date();
  });
  const [selectedStatus, setSelectedStatus] = useState('day');
  const [showCalendar, setShowCalendar] = useState(false);

  const statusChange = (type) => {
    setStstype(type);
    setSelectedStatus(type);
  };

  const formatLongDate = (locale, date) => {
    return format(date, 'yyyyMMdd');
  };

  const formatDisplayDate = (date) => {
    return format(date, 'yyyy년 MM월 dd일');
  };

  const onChange = (date) => {
    setSelectedDate(date);
    localStorage.setItem('selectedDate', date);
    const formattedDate = formatLongDate(undefined, date);
    setDate(formattedDate);
    setShowCalendar(false);
  };

  return (
    <S.RankingReriod>
      <S.CalenderArea>
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ marginRight: '8px', fontSize: '1.5rem', cursor: 'pointer' }}
          onClick={() => setShowCalendar((prev) => !prev)} // 아이콘 클릭 시 캘린더 열기/닫기
        />
        <S.CalendarButton onClick={() => setShowCalendar((prev) => !prev)}>
          {formatDisplayDate(selectedDate)}
        </S.CalendarButton>
      </S.CalenderArea>

      {showCalendar && (
        <S.CalendarWrapper>
          <Calendar
            calendarType='gregory'
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            onChange={onChange}
            value={selectedDate}
            maxDate={today}
          />
        </S.CalendarWrapper>
      )}

      <S.StatusTypeList>
        <S.StatusLi isSelected={selectedStatus === 'day'}>
          <S.StatusButton
            onClick={(e) => {
              e.preventDefault();
              statusChange('day');
            }}
            isSelected={selectedStatus === 'day'}>
            일간
          </S.StatusButton>
        </S.StatusLi>
        <S.StatusLi isSelected={selectedStatus === 'week'}>
          <S.StatusButton
            onClick={(e) => {
              e.preventDefault();
              statusChange('week');
            }}
            isSelected={selectedStatus === 'week'}>
            주간
          </S.StatusButton>
        </S.StatusLi>
        <S.StatusLi isSelected={selectedStatus === 'month'}>
          <S.StatusButton
            onClick={(e) => {
              e.preventDefault();
              statusChange('month');
            }}
            isSelected={selectedStatus === 'month'}>
            월간
          </S.StatusButton>
        </S.StatusLi>
      </S.StatusTypeList>
    </S.RankingReriod>
  );
};

export default RankingPeriod;
