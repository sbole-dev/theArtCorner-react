import React from "react";
import "./logout.css";
import { Navigate, useNavigate} from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handlehomepage = () => {
        navigate("/");
    }
  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-12 mb-5 mb-lg-0 position-relative text-center">
            <h1 className="my-8 display-8 fw-bold ls-tight" style={{ color: "hsl(0, 0%, 0%)" }}>
              You have been logged out successfully
            </h1>
            {/* <p className="mb-4 opacity-70" style={{ color: "hsl(0, 0%, 0%)", fontSize: "1.5rem" }}>
              Go to Homepage
            </p> */}
            <div>
            <button
                    type="href"
                    className="btn btn-primary btn-block mt-3"
                    onClick={handlehomepage}
                  >
                    Home Page
                  </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logout;
