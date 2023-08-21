import React from "react";
import ajay from "../../images/ajay.jpeg";
import { Link } from "react-router-dom";
const Chairman = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="chairman-heading">
            <p>Chairman Message</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="chairman-message">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="chairman-image">
                <img src={ajay} alt="chairman_image"></img>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="chairman-message-display">
                <p>
                  As we have seen in recent years 21st century is the century of
                  knowledge in which revoutionary changes are taking place in
                  the world of higher education in general and professional
                  education in particular. Latest technologies changes have made
                  not only our world but whole of this universe look like a
                  small village where we can watch the happenings of the space
                  on T.V. in the blink of eye. The technical and computer
                  Training in INDIA aims at devloping skilled manpower through
                  various courses to meet the requirements of the today's
                  industries and to prepare people for their bright future. We
                  felt a treamendous scope and opportunity to expand this
                  special eductaion through our study center in various parts of
                  the country and thus providing ample procpect to our students
                  for their bright future. Looking forward to a long term and
                  manually benficial business association which can give us self
                  satisfacation. with Good whishes<Link to="/aboutus">....Read More</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chairman;
