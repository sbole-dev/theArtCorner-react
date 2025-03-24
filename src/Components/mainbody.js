import React, { useState } from "react";
import ProductList from "./ProductList";

function MainBody() {
  const [products] = useState([
    { id: 1, pname: "Abstract Art", url: "https://example.com/abstract.jpg", description: "Colorful abstract painting", category: "Painting", price: 200 },
    { id: 2, pname: "Handmade Crochet", url: "https://example.com/crochet.jpg", description: "Soft and cozy", category: "Crochet", price: 50 },
  ]);

  const addToCartByID = (id) => {
    console.log(`Added product with ID: ${id} to cart`);
  };

  return (
    <div className="container mt-2">
      <div className="header">
        <h2>Welcome to the ART CORNER!</h2>
      </div>
      <a className="nav-link text-end" href="/products">View More -&gt;</a>
      <ProductList products={products} addToCartByID={addToCartByID} />
    </div>
  );
}

export default MainBody;
