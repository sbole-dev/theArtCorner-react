import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log({localStorage});
    localStorage.removeItem("loggedInUser");
    navigate("/login");
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
          <a className="nav-link active text-dark" href="/dashboard">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/products">
            Products
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-dark" href="/login">
            Login
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-dark" href="/cart">
            Cart
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark"
            href="/logout"
            onClick={handleLogout}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
