import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Navbar() {
  const { userInfo, handleLogOut, login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          React Movie App
        </a>

        <div className="buttons ">
          {login ? (
            <div className="logout d-flex align-items-center  ">
              <h3 className="text-capitalize text-light">
                {userInfo.firstName + " " + userInfo.lastName}
              </h3>
              <button
                onClick={handleLogOut}
                className="btn btn-outline-light btn-lg mx-2"
              >
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
