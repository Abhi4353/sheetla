import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../images/logo1.png'
const Footer = () => {
  return (
    <>
    <div className='container-fluid footer-div'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
           <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                <div className='footer-logo'>
                <img src={logo1} alt="logo"></img>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                <div className='footer-connect'>
                <h1>Connect With Us</h1>
                <Link><p>Facebook</p></Link>
                <Link><p>Instagram</p></Link>
                <Link><p>Linkedin</p></Link>
                <Link><p>Telegram</p></Link>
                </div>
              </div>
            </div>
           </div> 
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
           <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <div className='footer-connect'>
                <h1>Quick Links</h1>
                <Link to="/about"><p>About Us</p></Link>
                <Link to="/maingallery"><p>Gallery</p></Link>
                <Link to="/courses"><p>Courses</p></Link>
                <Link to="/faculty"><p>Faculty</p></Link>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
              <div className='footer-address'>
                <h1>Find Us</h1>
                <p>SHEETLA INSTITUTE(RUN BY:Sheetla Shiksha Samiti REGD.UNDER HP SOCIETY ACT 2006 WITH REGD NO.SUNDERNAGAR/7/2018)</p>
                <p>TEL:01907266451</p>
                <p>EMAIL:sheetlainstitutesnr@gmail.com</p>
                </div>
              </div>
            </div>
           </div> 
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='copyright-content text-center text-white'>
            <p>Copyright@2023 All rights reserved to Sheetla Institute</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
