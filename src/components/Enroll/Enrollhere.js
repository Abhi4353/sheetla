import React, { useState } from 'react'
import banner5 from '../../images/banner5.jpeg'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Backend_URL } from '../../config/config';
const Enrollhere = () => {
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[number,setNumber]=useState("")
const[course,setCourse]=useState("")
  const setenrolldata = async() => {
    if(name === "" && email === "" && number === "" && course === ""){
      toast.error("Please fill all the fields")
    }
    else{
      const res = await axios.post(`${Backend_URL}/addenquiry`,{
        Name : name,
        Email : email,
        Mobile : number,
        Course :  course
      })
      .then(function(response){
        if(response.status === 200) {
          toast.success("Thanks for Enroll here we will contact you as soon as possible")
        }
      })
      .catch(function(error){
        if(error.status === 400){
          toast.error("Something went wrong")
        }
      })
    }
  }
  return (
    <>
    <div className='container-fluid enroll-here'>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
               <div className='enroll-home-form '>
               <form>
                 <div className='form-group '>
                  <div className='enroll-form'>
                     <h1>Enquiry Form</h1>
                        <label className='form-label'>Name</label>
                        <input type='text' className='form-control' onChange={(e)=>setName(e.target.value)}></input>
                        <label className='form-label'>Email</label>
                        <input type='text' className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
                        <label className='form-label'>Mobile Number</label>
                        <input type='text' className='form-control' onChange={(e)=>setNumber(e.target.value)}></input>
                        <label className='form-label'>Course</label>
                        <select className='form-control' onChange={(e)=>setCourse(e.target.value)}>
                          <option>DCA</option>
                          <option>PGDCA</option>
                          <option>O Level</option>
                        </select>
                        <button type='button' className='btn btn-primary' onClick={setenrolldata}>
                         Submit
                        </button>
                        </div>
                 </div>
                 </form>
               </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='enroll-image'>
              <img src={banner5} alt='banner'></img>
              </div>
            </div>
        </div>
    </div>
  <ToastContainer/>
    </>
  )
}

export default Enrollhere
