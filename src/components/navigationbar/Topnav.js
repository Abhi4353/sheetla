import React from "react";
import { Link } from "react-router-dom";
const Topnav = () => {
  return (
    <div className="container-fluid bg-primary">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="main-nav">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/maingallery"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/courses"
                    >
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/faculty"
                    >
                      Faculty
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/contactus"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/login"
                    >
                      Login/Signup
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
