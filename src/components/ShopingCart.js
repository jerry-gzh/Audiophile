//import { useNavigate } from "react-router-dom"; // No es necesario si se usa el ProtectedRoute
import React, { useContext, useEffect } from "react";
import { useAuth } from "../context/authContext";
import CartContext from "../context/cartContext";
import CartItem from "./CartItem";

export function ShopingCart() {

  const {user, logout, loading} = useAuth()
  const cartContext = useContext(CartContext);
  const { cart, deleteCartById, deleteCart, total, getTotal } = cartContext;

  const handleLogout = async() => { await logout() }
  useEffect(() => { getTotal() }, []) //Se requiere useEffect ya que la función cambia un estado

  if (loading) return <h1>Loading...</h1>

  return (<div>
    <h1>Bienvenido {user.email}</h1>
    <button onClick={handleLogout}>LogOut</button>
    

    <section className="list-cart-container">
      {cart ? (
          cart.map( product => {
          return(<CartItem key={product.id}
                item={product} 
                deleteCartById={deleteCartById}
              />
            );
          })
        ): <p>cargando productos</p>
      }

      {cart.length ? (<div>
            <h1>TOTAL: {total}</h1>
            <button 
              className="button-primary button-padding"
              onClick={deleteCart}
            >Vaciar Carrito</button>
          </div>)
        : <p>No hay productos en el carrito</p>
      }
    </section>
  </div>);
}
export default ShopingCart;