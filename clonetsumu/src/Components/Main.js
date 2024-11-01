import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Commons/Home";
import Signup from "./Commons/Signup";
import SearchAccount from "./Commons/SearchAccount";
import './Components.css'

function Main(props) {
    return (
      <div>
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/searchAccount" element={<SearchAccount />} />
          </Routes>
        </body>
      </div>
    );
};

export default Main;