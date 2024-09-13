import React from 'react';
import './ActorCard.style.css';

function ActorCard({ name }) {
  return (
    <div className='profile'>
      <div className='actor-img'></div>
      {name}
    </div>
  );
}

export default ActorCard;
