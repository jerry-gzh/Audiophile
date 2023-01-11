import React from 'react';
import { Link } from 'react-router-dom';

export function Card({Brand, Model, Img, id}) {
  
  return (
    <div className='card'>
      <img src={Img} alt='' className='card-img-top'/>
      <div className='card-body'>
        <h4 className='card-title'>{Model}</h4>
        <p className='card-text text-secondary'>{Brand}</p>
        <Link to= {`/item/:${id}`} >
          <button  className='btn btn-outline-secondary'>Details</button>
        </Link>
      </div>
    </div>
  )
}
