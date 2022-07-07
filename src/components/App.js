import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext";

import Singin from "./Singin";
import Singup from "./Singup";
import Products from "./Products";
import Cart from "./Cart";
import History from "./History";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <Routes>
            <Route path="/" element={<Singin />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}
