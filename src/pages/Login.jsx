import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertClass, setAlertClass] = useState("alert alert-danger d-none");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/reactProject-movieApp/");
    } else {
      setAlertClass("alert alert-danger");
    }
  };

  return (
    <div>
      <div className="login">
        <div className="form-image">
          <img
            src={"https://picsum.photos/800/800"}
            className="img-fluid "
            alt="photo"
          />
        </div>
        <div className="login-form ">
          <div className={alertClass} role="alert">
            Please fill in the blanks!!!
          </div>
          <h1 className="form-title display-3">Login</h1>
          <form id="login" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label for="email" className="form-label display-4">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label display-4">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
