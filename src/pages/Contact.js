import React from 'react'
import Layout from '../layouts/Layout'
const Contact = () => {
  return (
   <>
   <Layout>
    <div className='container w-50 mt-5 contact-component'>
       <div className='row'>
         <div className='col'>
         <form >
              <div className='form-group pb-5'>
                <label>First Name</label>
                <input type="text" className='form-control' ></input><br></br>
                <label>Last Name</label>
                <input type="text" className='form-control' ></input><br></br>
                <label>Email Id</label>
                <input type="email" className="form-control" ></input><br></br>
                <label>Gender</label>
                <input type="text" className='form-control' ></input><br></br>
                <label>Enter Your Message Here</label>
                <textarea className='form-control' ></textarea><br></br>
                <button type='button' className='btn btn-primary mt-2' >Submit</button>

              </div>
              </form>
         </div>
       </div>
    </div>
    </Layout>
   </>
  )
}

export default Contact
