import React from "react";
import { Link } from "react-router-dom";
import logo1 from '../../images/logo1.png'
const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="top-nav">
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="">
              <Link to="/">
                <img src={logo1} className="header-logo" alt="logo"/>
              </Link>
            </div>
          </div>
          <div className="col-sm-10 col-md-7 col-lg-7 col-xl-7">
            <div className="header-text">
            <h1>SHEETLA INSTITUTE</h1>
             <p>(RUN BY:SHEETLA SHIKSHA SAMITI REGD. UNDER HP SOCITEY ACT 2006 WITH REGD. NO. SUNDERNAGAR/7/2018)</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="header-contact-info">
               <i className="fa fa-phone" aria-hidden="true" >&nbsp;+91-9418325451</i>
               <i class="fa fa-envelope" aria-hidden="true">&nbsp;sheetlainstitutesnr@gmail.com</i>
            </div>
          </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
