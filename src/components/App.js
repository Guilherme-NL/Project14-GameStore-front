import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext";

import Singin from "./Singin";
import Singup from "./Singup";
import Products from "./Products";
import Cart from "./Cart";
import History from "./History";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <Routes>
            <Route path="/" element={<Singin />} />
            <Route path="/singup" element={<Singup />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}
