import React, { useEffect } from 'react';
import { useDetail } from '../../hooks/temp';

export default function Mainpage() {
  const { data } = useDetail();

  useEffect(() => {
    if (data) console.log('data', data);
  }, [data]);
  return <div>Mainpage</div>;
}
