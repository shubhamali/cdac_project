import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {

const[email,setEmail]=useState("");
const [password,setPassword]=useState("");
const handleSubmit=(e)=>{
  e.preventDefault();
  setEmail("");
  setPassword("");

  localStorage.setItem("email",email)
  localStorage.setItem("password",password);
}
  return (
    <>
    <div>
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <button type="submit" class="btn btn-success mt-4" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
      <div className="login text-center mt-1">
        <span>Don't have Account? </span>
        <Link to="/signup" className="login-link">
          Sign Up
        </Link>
        {/* <Link to="/signup" type="submit" class="btn btn-success">
          Sign Up
        </Link> */}
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;