import React from "react";
import { Link } from "react-router-dom";
const register = () => {
  return (
     <div className="login-container  w-100 top-0">
      <form className="login-form">
        <h2 className="mb-3 signup">Sign up</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your Full Name"
          />
        </div>
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
          <label htmlFor="repassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="repassword"
            placeholder="Repeat your password"
          />
           
        </div>
       
      

        <Link to="/" type="submit" className="btn">
          Create an account
        </Link>


        <div className="mt-3 fs-4 ">
          Do you have an account? <Link to="/login" className="regester">Sign in </Link>
        </div>
      </form>
     </div>
  );
};

export default register;
