// Login.jsx
import React from "react";
import { Link } from "react-router-dom";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./sb-admin.css";
const Login = () => {

  return (
    <div className="login-container  w-100 top-0">
      <form className="login-form">
        <h2 className="mb-3 signin">Sign in</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-3">
          <div className="form-check fs-4">
            <label class="containerr">
              <input type="checkbox" />
              <div class="checkmark"></div>
            </label>
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
        </div>

        <Link to="/" type="submit" className="btn ">
          Sign in
        </Link>

        <div className="mt-3 fs-4 ">
          <Link to="/forgotpassword" className="forgetpassword">
            Forgot Password?
          </Link>
        </div>

        <div className="mt-3 fs-4 ">
          Don't have an account?{" "}
          <Link to="/register" className="regester">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
