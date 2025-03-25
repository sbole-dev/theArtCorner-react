import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/logout");
  };

  return (
    <div className="header">
      <ul
        className="nav justify-content-end navbar position-sticky"
        style={{ position: "sticky" }}
      >
        <a
          className="navbar-brand position-absolute top-1 start-0 ms-3 text-dark"
          href="#"
        >
          The Art Corner
        </a>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/products">
            Products
          </a>
        </li>
        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/cart">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link text-dark" onClick={handleLogout}>
                Logout
              </span>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/register">
                Register
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
