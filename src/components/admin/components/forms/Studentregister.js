import React, { useState } from "react";

const Studentregister = () => {
  const [show, setShow] = useState(true);

  const setformitems = () => {
    setShow(false)
  }
  return (
    <>
      <div className="container-fluid student-form">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="student-registration-heading mb-5">
                    <h1>Student Registration Form</h1>
                    <div className="form-group">
                      <form>
                      {show ? (
                        <>
                     
                          <div className="student-registration-form">
                            <p className="text-left">Personal Details</p>
                            <label className="form-label">FirstName</label>
                            <input type="text" className="form-control"></input>
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control"></input>
                            <label className="form-label">Gender</label>
                            <select className="form-control">
                              <option>Select Gender...</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </select>
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control"></input>
                            <label className="form-label">Phone Number</label>
                            <input type="text" className="form-control"></input>
                            <label className="form-label">Email Id</label>
                            <input
                              type="email"
                              className="form-control"
                            ></input>
                            <label className="form-label">Adhaar Card Number</label>
                            <input type="text" className="form-control"></input>
                            <label className="form-label">Course</label>
                            <select className="form-control">
                              <option>Select Course...</option>
                              <option>DCA</option>
                              <option>'O' Level</option>
                              <option>PGDCA</option>
                            </select>
                            <label className="form-label">Student Pic</label>
                            <input type="file" className="form-control"></input>
                            <label className="form-label">Father Name</label>
                            <input type="text" className="form-control"></input>
                            <label className="form-label">Mother Name</label>
                            <input type="text" className="form-control"></input>
                            <label className="form-label">Address</label>
                            <textarea className="form-control"></textarea>
                            <button type="button" className="btn btn-primary" onClick={setformitems}>
                              Save and Next
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                        <div className="student-registration-form">
                        <p className="text-left">Academic Details</p>
                        <label className="form-label">10th Passing Year</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">10th Passing School Name</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">10th Board</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">10th Percentage</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">10th Certificate</label>
                        <input type="file" className="form-control"></input>
                        <label className="form-label">12th Passing Year</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">12th Passing School Name</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">12th Stream</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">12th Board</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">12th Percentage</label>
                        <input type="text" className="form-control"></input>
                        <label className="form-label">12th Certificate</label>
                        <input type="file" className="form-control"></input>
                        <label className="form-label">Adhaar Card</label>
                        <input type="file" className="form-control"></input>
                        <button type="button" className="btn btn-primary">Enroll</button>
                        </div>
                        </>
                      )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentregister;
