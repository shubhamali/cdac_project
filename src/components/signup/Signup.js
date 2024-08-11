import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
     <>   
   <section className="container my-2 w-50 text-light p-2">
    <form className="row g-3 p-3 signup-form">
    <h4 className="text-center text-success">Sign Up</h4>
        <div className="col-md-4">
            <label for="validationDefault01" className="form-label">First name</label>
            <input type="text" className="form-control" id="validationDefault01" value="Mark" required/>
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationDefault02" value="zung" required/>
          </div>
          <div className="col-md-4">
            <label for="validationDefaultUsername" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">@</span>
              <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
            </div>
          </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4"/>
        </div>
        <div className="col-md-6">
          <label for="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword"/>
        </div>
        <div className="col-md-6">
          <label for="inputPhone" className="form-label">PhoneNo</label>
          <input type="tel" className="form-control" id="inputPhone"/>
        </div>
        <div className="col-md-6">
          <label for="inputAge" className="form-label">Age</label>
          <input type="number" className="form-control" id="inputAge"/>
        </div>
        
        <div className="col-12">
          <label for="inputAddress2" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">Role</label>
          <select id="inputState" className="form-select">
            <option selected>User</option>
            <option>Admin</option>
            <option>Trainer</option>
          </select>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">Gym</label>
          <select id="inputState" className="form-select">
            <option selected>Kothrud(Pune)</option>
            <option selected>Kharadi(Pune)</option>
            <option>Mumbai</option>
          </select>
        </div>
        <div className="col-md-4 mt-5">
        <label htmlFor="username" className="text-dark px-1">Gender:</label>
          <input type="radio" id="male" name="gender" value="male"/>
          <label for="html" className="text-dark px-2">Male</label>
          <input type="radio" id="female" name="gender" value="female"/>
          <label for="css" className="text-dark px-2">Female</label>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
              <span className="text-dark">Check me out</span>
            </label>
          </div>
        </div>
        <div className="col-12 btn">
          <button type="submit" className="btn btn-success">Register</button>
        </div>
        <div className="col-12 text-center">
        <span className="text-dark">Already have an Account? </span>
        <Link to="/login" className="login-link">
          Login
        </Link>
        </div>
        
      </form>
   </section>
   </>
  );
};

export default Signup;