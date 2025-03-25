import React, { useEffect, useState } from "react";
import "./cart.css"; // Ensure you have styles for proper layout

const Cart = () => {
  const [userCurrent, setUserCurrent] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const userC = localStorage.getItem("loggedInUser");
    if (userC) {
      setUserCurrent(JSON.parse(userC)); // Parse string to object
    }
  }, []);

  useEffect(() => {
    if (userCurrent) {
      fetchCartItems();
    }
  }, [userCurrent]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`http://localhost:3000/cart?userId=${userCurrent.id}`);
      if (response.ok) {
        const items = await response.json();
        setCartItems(items);
        calculateTotal(items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        calculateTotal(updatedCart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((total, item) => total + item.product.price, 0);
    setTotal(totalAmount);
  };

  return (
    <div className="cardcart">
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
                {cartItems.length} items
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          {cartItems.map((item) => (
            <div className="box" key={item.id}>
              <div className="row border-top">
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img
                      className="img-fluid"
                      src={item.product.url}
                      alt={item.product.pname}
                    />
                  </div>
                  <div className="col">
                    <div className="row text-muted">{item.product.pname}</div>
                    <div className="row">{item.product.description}</div>
                  </div>
                  <div className="col">
                    <a href="#">-</a>
                    <a href="#" className="border">
                      1
                    </a>
                    <a href="#">+</a>
                  </div>
                  <div className="col">
                    ₹ {item.product.price} <span className="close"><a href="#" onClick={() => removeFromCart(item.id)}>&#10005;</a></span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Back to Shop */}
          <div className="back-to-shop">
            <a href="/products"> &#8592;</a>
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
              ITEMS: {cartItems.length}
            </div>
            <div className="col text-right">₹ {total}</div>
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
            <div className="col text-right">₹ {total + 49.99}</div>
          </div>
          <button className="btncart">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
