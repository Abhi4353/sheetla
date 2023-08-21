import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../layouts/Layout';
import axios from 'axios';
import { Backend_URL } from '../../config/config';
import { ToastContainer,toast } from 'react-toastify';
const Login = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();
  const loginintoaccount = async() => {
    if(email === "" && password === ""){
      toast.error("Please fill out form")
    }
    else{
      const res = await axios.post(`${Backend_URL}/login`,{
        Email : email,
        Password : password,
       })
       .then(function(response){
        if(response.status === 200 && response.data.role === "student"){
          localStorage.setItem("token",response.data.userData)
          navigate("/userdashboard")
        }
        else if(response.status === 200 && response.data.role === "admin"){
          localStorage.setItem("token",response.data.userData)
          navigate("/admindashboard")
        }
       })
       .catch(function(error){
        if(error.response.status === 401){
          toast.error("Wrong Username Or Password")
        }
       })
    }
  }
  return (
    <>
    <Layout>
     <div className='container-fluid login-page'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='login-form'>
            <form>
              <div className='form-group'>
                 <h1>Login Form</h1>
                 <label>Email Address</label>
                 <input type='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                 <label>Password</label>
                 <input type='password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                 <button type='button' className='btn btn-primary' onClick={loginintoaccount}>Login</button> 
                 <p>Dont't have an account<Link to="/registration">&nbsp;Register</Link></p>
              </div>
              </form> 
          </div>
        </div>
      </div>
      </div> 
      <ToastContainer/>
      </Layout>
    </>
  )
}

export default Login
