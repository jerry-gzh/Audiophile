import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { CartContext } from '../context/cartContext';
import { ItemContext } from '../context/itemContext';
import ItemCount from './ItemCount.jsx';

export function Item() {
  const params = useParams();
  const {products} = useContext(ItemContext);
  const id = ((params.id).slice(1)-1);
  const cartContext = useContext(CartContext);
  const {cart, addToCart} = cartContext;
  //console.log(addToCart);

  const onAdd = (qty)=>{
    addToCart((products[id]), qty)
  } 

  return (
    <div>
      {products != null ? (
        <>
          <h1>Modelo: {(products[id]).Model}</h1>
          <h2>Marca: {(products[id]).Brand}</h2>
          <h2>Tipo: {(products[id]).Type}</h2>
          <h2>Impedancia: {(products[id]).Impedance}Ω</h2>
          <h2>Respuesta: {(products[id]).Response}</h2>
          <h2>Precio: ${(products[id]).Price}</h2>
          <ItemCount initial={1} onAdd={onAdd}/>
        </>
      ) : (
        "No hay productos"
      )}
    </div>
  )
}