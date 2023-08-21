import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import axios from "axios";
import { Backend_URL } from "../../config/config";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const usersignup = async () => {
    if (
      fname === "" &&
      lname === "" &&
      dateOfBirth === "" &&
      number === "" &&
      email === "" &&
      password === "" &&
      cpassword === ""
    ) {
      toast.error("please fill out all fields");
    } else if(password === cpassword){
      const res = await axios.post(`${Backend_URL}/signup`, {
        FirstName: fname,
        LastName: lname,
        DOB: dateOfBirth,
        Email: email,
        PhoneNumber: number,
        Password: password,
      })
      .then(function(response){
        if(response.status === 200){
          toast.success("Registration successfull")
        }
      })
      .catch(function(error){
        if(error.response.status === 403){
          toast.error("Email Already exist")
        }
      })
    }
    else{
      toast.error("Password and Confirm Password Not same")
    }
  };

  return (
    <>
    <Layout>
      <div className="container-fluid login-page">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <h1>Registration Form</h1>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFname(e.target.value)}
                  />
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLname(e.target.value)}
                  />
                  <label>Date Of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={usersignup}
                  >
                    Register
                  </button>
                  <p>
                    Already have an account<Link to="/login">&nbsp;Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      </Layout>
    </>
  );
};

export default Registration;
