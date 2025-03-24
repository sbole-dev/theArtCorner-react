import React from "react";
import "./cart.css"; // Ensure you have styles for proper layout

const Cart = () => {
  return (
    <div className="cardcart" >
      <div className="row">
        {/* Left Section - Cart Items */}
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                2 items
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="box">
            <div className="row border-top">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/100"
                    alt="Product"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Product Name</div>
                  <div className="row">Product Description</div>
                </div>
                <div className="col">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div className="col">
                  ₹ 500 <span className="close"><a href="/cart">&#10005;</a></span>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="row border-top">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/100"
                    alt="Product"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Another Product</div>
                  <div className="row">Another Description</div>
                </div>
                <div className="col">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div className="col">
                  ₹ 750 <span className="close"><a href="/cart">&#10005;</a></span>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Shop */}
          <div className="back-to-shop">
            <a href="/product">&leftarrow;</a>
            <span className="text-muted">Back to shop</span>
          </div>
        </div>

        {/* Right Section - Summary */}
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: 0 }}>
              ITEMS: 2
            </div>
            <div className="col text-right">₹ 1250</div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select>
              <option className="text-muted">Standard-Delivery - ₹ 49.99</option>
            </select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
          </form>
          <div className="row" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">₹ 1299</div>
          </div>
          <button className="btncart">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
