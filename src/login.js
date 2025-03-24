import React, { useState} from "react";
// import { Link } from "react-router-dom";
import "./login.css"; // Ensure this file contains the CSS you provided


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError("Email and Password are required!");
        return;
      }
      setError(""); // Clear error if form is valid
      console.log("Logging in with:", { email, password });
    };
  
    return (
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            {/* Left Side */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="reveal-text">The Art Corner</h1>
              <p className="mb-4" style={{ color: "black" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, expedita iusto veniam atque...
              </p>
              <button className="btn btn-outline-primary">Continue as Guest →</button>
            </div>
  
            {/* Right Side (Login Form) */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Email address</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
  
                    {/* Password Input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
  
                    {/* Error Message */}
                    {error && <p className="text-danger">{error}</p>}
  
                    {/* Register Link */}
                    <p className="nav-link">New User? Register Here.</p>
  
                    {/* Login Button */}
                    <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
                  </form>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Login;