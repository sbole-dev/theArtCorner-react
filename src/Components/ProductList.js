import React, { useState, useEffect } from "react";
import "./products.css";

function ProductList() {
  const categories = ["Painting", "Crochet", "Sculpting", "Photography", "Pen Sketch"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();

  // // Temporary product data
  // const products = [
  //   { id: 1, pname: "Abstract Art", url: "https://example.com/abstract.jpg", description: "Colorful abstract painting", price: 200, category: "Painting" },
  //   { id: 2, pname: "Handmade Crochet", url: "https://example.com/crochet.jpg", description: "Soft and cozy crochet work", price: 50, category: "Crochet" },
  //   { id: 3, pname: "Marble Sculpture", url: "https://example.com/sculpture.jpg", description: "Beautiful marble sculpture", price: 500, category: "Sculpting" },
  //   { id: 4, pname: "Nature Photography", url: "https://example.com/photo.jpg", description: "Stunning landscape photography", price: 150, category: "Photography" },
  //   { id: 5, pname: "Pen Sketch Portrait", url: "https://example.com/pen-sketch.jpg", description: "Detailed pen sketch of a human face", price: 100, category: "Pen Sketch" }
  // ];

  const getProducts = async ()  =>{
    await fetch('http://localhost:3000/products')
         .then(response => response.json())
         .then(json => { setProducts(json); console.log(json)})
   .catch(error => {
       console.error('Error fetching the JSON:', error);
   });
  }

  useEffect(() => {
    getProducts();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [selectedCategory]);

  const onCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCartByID = (id) => {
    console.log(`Product with ID: ${id} added to cart.`);
  };

  return (
    <div className="container mt-4">
      {/* Category Dropdown */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="dropdown-container">
            <select className="form-select" onChange={onCategoryChange}>
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products?.filter((product) => !selectedCategory || product.category === selectedCategory)
            .map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                <div className="card hover-card h-100">
                  <img src={product.url} className="card-img-top" alt={product.pname} />
                  <div className="card-body">
                    <h5 className="card-title">{product.pname}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                    <p className="card-text"><strong>ID:</strong> {product.id}</p>
                    <button className="btn btn-primary" onClick={() => addToCartByID(product.id)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
