import React from 'react';

export function Card({Brand, Model, Img }) {
  return (
    <div className='card'>
      <img src={Img} alt='' className='card-img-top'/>
      <div className='card-body'>
        <h4 className='card-title'>{Model}</h4>
        <p className='card-text text-secondary'>{Brand}</p>
        <a href='#!' className='btn btn-outline-secondary'>Cart</a>
      </div>
    </div>
  )
}
