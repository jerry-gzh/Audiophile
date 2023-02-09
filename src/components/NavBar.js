import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
import './scss/NavBar.scss';
import logo from "../resources/logo.png";
import logo_s from "../resources/logo_s.png";
import userLogo from "../resources/userLogo.png";
import { BiCart } from 'react-icons/bi';
import { useAuth } from "../context/authContext";



export default function NavBar() {
  const cartContext = useContext(CartContext);
  const { user } = useAuth()
  const { cart } = cartContext;
  const index = cart.length;
  
  if(user){
    console.log(user);
  }
  

  return(
    <div className="Nav-Bar">
      <div className="nav-lg">
        <Link to="/Home"><img src={logo} alt="Home"/></Link>
      </div>
      <div className="nav-s">
        <Link to="/Home"><img src={logo_s} alt="Home"/></Link>
      </div>
      <ul className="NB-center">
        <li className="shop">
          <Link to="Audiophile/">Shop</Link>
        </li>
        <li className="nav-lg">
          <Link to="Audiophile/aboutus">About Us</Link>
        </li>
        <li className="nav-lg">
          <Link to="Audiophile/contact">Contact</Link>
        </li>
        
      </ul>
      <ul className="NB-rigth" > 
        <li>
          <Link to="/login"><img src={userLogo} alt="Login"/></Link>
        </li>|
        <li>
          <Link to="/shopingCart"><BiCart/></Link>
        </li>
        <li id="index-li">
          {index ? <div id="index">{index}</div> : <div>  </div>}
        </li>
      </ul>
    </div>
  )
};

