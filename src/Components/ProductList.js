import React, { useState, useEffect } from "react";
import "./products.css";

function ProductList() {
  const categories = ["Painting", "Crochet", "Sculpting", "Photography", "Pen Sketch"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [userCurrent, setUserCurrent] = useState();

  const getProducts = async () => {
    await fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(json => { setProducts(json); console.log(json) })
      .catch(error => {
        console.error('Error fetching the JSON:', error);
      });
  }

  useEffect(() => {
    const userC = localStorage.getItem("loggedInUser");
    if (userC) {
      setUserCurrent(JSON.parse(userC)); // Parse string to object
      console.log(userCurrent);
    }
  }, []);

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

  const addToCartByID = async (product) => {
    console.log(`Product with ID: ${product.id} added to cart.`);
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userCurrent.id, product }),
      });
      if (response.ok) {
        window.alert("Added To Cart!");
      } else {
        alert("Not added");
      }
    } catch (error) {
      console.log(error);
    }
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
                    <button className="btn btn-primary" onClick={() => addToCartByID(product)}>
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
