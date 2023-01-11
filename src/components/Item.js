import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { ItemContext } from '../context/itemContext';

export function Item() {
  const params = useParams();
  const {products} = useContext(ItemContext);
  const item = (products[((params.id).slice(1)-1)]);

  return (
    <div>
      {products != null ? (
        <>
          <h1>Detalles: {params.id}</h1>
          <h1>Modelo: {item.Model}</h1>
        </>
      ) : (
        "No hay productos"
      )}
    </div>
  )
}