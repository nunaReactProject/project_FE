import React, { useEffect } from 'react';
import { useTest } from '../hooks/useTest';

export default function Test() {
  const { data, isLoading } = useTest();

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);
  return (
    <div>
      {data?.db?.map((data, index) => {
        return (
          <div key={index}>
            <img src={data.poster} />
          </div>
        );
      })}
    </div>
  );
}
