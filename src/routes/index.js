import React from "react";
import { Routes, Route} from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";

import NavBar from "../components/NavBar";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { ShopingCart } from "../components/ShopingCart";
import { Item } from "../components/Item";

export default function AllRoutes() {
  return (
    <div>
      
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/shopingCart' element={ <ProtectedRoute> <ShopingCart/> </ProtectedRoute> }/>
          <Route path="/item/:id" element={<Item/>} />
        </Routes>
      
    </div>
  )
}
