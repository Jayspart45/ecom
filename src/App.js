import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

import Hero from "./components/Hero";
import Cart from "./components/Cart";

import {  Routes, Route,BrowserRouter} from "react-router-dom";

export default function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/cart" element={<Cart/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
