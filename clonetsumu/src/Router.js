import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Signup from "./Signup";
import Searchaccount from "./SearchAccount";


export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          About
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/signup'>
          Signup
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/searchaccount'>
          Searchaccount
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/searchaccount' element={<Searchaccount />} />
      </Routes>
    </BrowserRouter>
  );
}