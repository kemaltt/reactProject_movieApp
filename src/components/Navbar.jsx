import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Navbar() {
  const { userInfo, handleLogOut, login } = useContext(AuthContext);
  const navigate = useNavigate();
  let navbar;
  let btnColor;
  let navBrand;

  if (login) {
    navbar = "navbar-2";
    btnColor = "btn btn-outline-warning ml-3 ";
    navBrand = "navbar-brand text-danger";
  } else {
    navbar = "navbar-1";
    btnColor = "btn btn-outline-light ml-3 d-none";
    navBrand = "navbar-brand text-light";
  }

  // const handleBrand = (e) => {
  //   e.preventDefault();

  //   login ? navigate("/") : alert("Please log in to make a search");
  // };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light d-flex justify-content-between"
        id={navbar}
      >
        <a className={navBrand} href="/reactProject_movieApp/">
          React Movie
        </a>

        <div className="buttons ">
          {login ? (
            <div className="logout d-flex align-items-center  ">
              <h3 className="text-capitalize text-light">
                {userInfo.firstName + " " + userInfo.lastName}
              </h3>
              <button onClick={handleLogOut} className={btnColor}>
                Log Out
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                type="button"
                className="btn btn-outline-light"
              >
                Login
              </button>
              <button
                //onClick={() => navigate("/register")}
                onClick={() => navigate("/register")}
                type="button"
                className="btn btn-outline-light mx-2"
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
