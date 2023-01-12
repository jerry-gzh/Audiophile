import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { ItemContext } from '../context/itemContext';

export function Item() {
  const params = useParams();
  const {products} = useContext(ItemContext);
  //const item = (products[((params.id).slice(1)-1)]);//Implementar async Await 
  
  return (
    <div>
      {products != null ? (
        <>
          <h1>Modelo: {(products[((params.id).slice(1)-1)]).Model}</h1>
          <h2>Marca: {(products[((params.id).slice(1)-1)]).Brand}</h2>
          <h2>Tipo: {(products[((params.id).slice(1)-1)]).Type}</h2>
          <h2>Impedancia: {(products[((params.id).slice(1)-1)]).Impedance}Ω</h2>
          <h2>Respuesta: {(products[((params.id).slice(1)-1)]).Response}</h2>
          <h2>Precio: ${(products[((params.id).slice(1)-1)]).Price}</h2>
        </>
      ) : (
        "No hay productos"
      )}
    </div>
  )
}