import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/mainlayout";
import Products from "./Components/ProductList";
import Cart from "./Components/cart";
import Login from "./login";
import RegistrationForm from "./Registration";
import MainBody from "./Components/mainbody";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />} /> 
        <Route path="/dashboard" element={<MainBody />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    // <div>
    //   <MainLayout />
    //   <MainBody />
    //   <Products />
    //   <Login />
    // </div>

  );
}

export default App;
