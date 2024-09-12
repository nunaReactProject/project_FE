import React, { useEffect } from 'react';
import { useDetail } from '../../hooks/temp';
import Banner from '../../components/Mainpage/banner/Banner';
import TicketOpen from '../../components/Mainpage/ticketOpen/TicketOpen';

export default function Mainpage() {
  const { data } = useDetail();

  useEffect(() => {
    if (data) console.log('data', data);
  }, [data]);
  return (
    <div>
      <Banner />
      <TicketOpen />
    </div>
  );
}
