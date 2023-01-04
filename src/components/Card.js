import React from 'react';

export function Card({Brand, Model, Img, id}) {

  const selectId = (id)=>{
    console.log(id)
  }
  
  return (
    <div className='card'>
      <img src={Img} alt='' className='card-img-top'/>
      <div className='card-body'>
        <h4 className='card-title'>{Model}</h4>
        <p className='card-text text-secondary'>{Brand}</p>
        <button onClick={() => {selectId(id)}} className='btn btn-outline-secondary'>Details</button>
      </div>
    </div>
  )
}
