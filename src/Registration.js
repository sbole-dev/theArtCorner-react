import React, { useState } from "react";
import "./Registration.css";


const RegistrationForm = () => {
    const [user, setUser] = useState({
      uname: "",
      address: "",
      contact: "",
      email: "",
      pwd: "",
    });
  
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (user.uname && user.address && user.contact.match(/^\d{10}$/) && user.email && user.pwd.length >= 6) {
        setIsRegistered(true);
        setErrorMessage("");
      } else {
        setIsRegistered(false);
        setErrorMessage("User not Registered!");
      }
    };
  
    return (
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="reveal-text">The Art Corner</h1>
              <p className="mb-4 opacity-70" style={{ color: "hsl(0, 0%, 0%)" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
  
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="uname">
                        Username
                      </label>
                      <input
                        type="text"
                        id="uname"
                        className="form-control"
                        name="uname"
                        value={user.uname}
                        onChange={handleChange}
                        required
                      />
                    </div>
  
                    <div className="form-group">
                      <label className="form-label" htmlFor="address">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
  
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="contact"
                        className="form-control"
                        name="contact"
                        value={user.contact}
                        onChange={handleChange}
                        required
                      />
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="pwd">
                        Password
                      </label>
                      <input
                        type="password"
                        id="pwd"
                        className="form-control"
                        name="pwd"
                        value={user.pwd}
                        onChange={handleChange}
                        required
                      />
                    </div>
  
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
  
                    {isRegistered && <div className="alert alert-success mt-4">You are registered successfully!</div>}
                    {errorMessage && <div className="alert alert-danger mt-4">{errorMessage}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RegistrationForm;