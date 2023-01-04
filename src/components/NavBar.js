import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import './NavBar.css';


export default function NavBar() {
  const {user} = useAuth()

  return(
    <div className="Nav-Bar">
      <ul className="nav-links">
        <div className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/shopingCart">Cart</Link>
              </li>
        </div>
      </ul>
    </div>
  )
};

