import React from 'react';

export function Card({Brand, Model, Img }) {
  return (
    <div className='card'>
      <img src={Img} alt=''/>
      <div className='card-body'>
        <h4 className='card-title'>{Model}</h4>
        <p className='card-text text-secondary'>{Brand}</p>
      </div>
    </div>
  )
}
