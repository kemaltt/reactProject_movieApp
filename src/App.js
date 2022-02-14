import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider } from "./contexts/AuthContext";
import Overview from "./pages/Overview";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reactProject_movieApp/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/overview" element={<Overview />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
};
export default App;
