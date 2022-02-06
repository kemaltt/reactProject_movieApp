import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
        <a className="navbar-brand" href="/reactProject-movieApp/">
          React Movie App
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}

        <div className="buttons " id="navbarNavDropdown">
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="btn btn-outline-light"
          >
            Login
          </button>
          <button
            //onClick={() => navigate("/register")}
            onClick={handleClick}
            type="button"
            className="btn btn-outline-light mx-2"
          >
            Register
          </button>
        </div>
      </nav>
    </div>
  );
}
