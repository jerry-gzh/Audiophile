import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import './scss/NavBar.scss';
import logo from "../resources/logo.png";
import userLogo from "../resources/userLogo.png";
import { BiCart } from 'react-icons/bi';


export default function NavBar() {
  const {user} = useAuth()

  return(
    <div className="Nav-Bar">
      <div>
        <Link to="/"><img src={logo} alt="Home"/></Link>
      </div>
      <ul className="NB-center">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="NB-rigth" > 
        <li>
          <Link to="/login"><img src={userLogo} alt="Login"/></Link>
        </li>|
        <li>
          <Link to="/shopingCart"><BiCart/></Link>
        </li>
      </ul>
    </div>
  )
};

