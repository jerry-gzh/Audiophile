//import { useNavigate } from "react-router-dom"; // No es necesario si se usa el ProtectedRoute
import React, { useContext } from "react";
import { useAuth } from "../context/authContext";
import CartContext from "../context/cartContext";
import CartItem from "./CartItem";

//import { Products } from "../services/getProducts";
//import { async } from "@firebase/util";
//import { Card } from "./Card";
//import { Home } from './Home'

export function ShopingCart() {

  const {user, logout, loading} = useAuth()
  //const navigate = useNavigate()

  const handleLogout = async() => {
    await logout()
    //navigate("/")
  }

  const cartContext = useContext(CartContext);
  const { cart, deleteCartById, deleteCart, total, getTotal } = cartContext;
  //console.log(cart);
  //console.log(getTotal());
  //getTotal();
  //console.log(total)

  if (loading) return <h1>Loading...</h1>

  return (<div>
    <h1>Welcome {user.email}</h1>

    <button onClick={handleLogout}>LogOut</button>
    
    <h1>Carrito de compra</h1>
    <h1>{cart.length}</h1>

    <section className="list-cart-container">
            {cart ? ( getTotal(),
                cart.map( product => {
                return( <CartItem key={product.id} 
                                  item={product} 
                                  deleteCartById={deleteCartById} 
                        /> );
                })
                )
                  : <p>cargando productos</p>
            }
            <h1>TOTAL: {total}</h1>
            {cart.length ? (<button 
                            className="button-primary button-padding"
                            onClick={deleteCart}
                      >Vaciar Carrito</button>)
                        : <p>No hay productos en el carrito</p>
            }
        </section>

  </div>);
}
export default ShopingCart;