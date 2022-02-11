import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleUserInfo = (firstName, lastName, email, password) => {
    setUserInfo({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  };

  const [loginError, setLoginError] = useState(false);
  const [login, setLogin] = useState(false);

  const handleLogin = (email, password) => {
    if (userInfo.email == email && userInfo.password == password) {
      setLogin(true);
      setLoginError(false);
      navigate("/");
    } else {
      setLoginError(true);
    }
  };

  const handleLogOut = () => {
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo: userInfo,
        handleUserInfo: handleUserInfo,
        handleLogin: handleLogin,
        login: login,
        loginError: loginError,
        handleLogOut: handleLogOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
