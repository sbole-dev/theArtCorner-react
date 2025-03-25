import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/mainlayout";
import Product from "./product";
import Cart from "./Components/cart";
import Login from "./login";
import RegistrationForm from "./Registration";
import MainBody from "./Components/mainbody";
import Logout from "./Components/logout";
import AboutUs from "./Components/aboutus";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Product />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/logout" element={<Logout />} />
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
