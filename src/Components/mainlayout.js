import React from "react";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";
import ProductList from "./ProductList";

function MainLayout() {
  return (
    <div>
      <Header />
      <Body />
      {/* <ProductList /> This renders the product listing */}
      <Footer />
    </div>
  );
}

export default MainLayout;
