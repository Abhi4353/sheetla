import React, { useState } from "react";

const Studentregister = () => {
  const [show, setShow] = useState(true);
  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[gender,setGender]=useState("")
  const[dateOfBirth,setDateOfBirth]=useState("")
  const[phone,setPhone]=useState("")
  const[email,setEmail]=useState("")
  const[adhaar,setAdhaar]=useState("")
  const[course,setCourse]=useState("")
  const[studentPic,setStudentPic]=useState(null)
  const[fatherName,setFatherName]=useState("")
  const[motherName,setMotherName]=useState("")
  const[address,setAddress]=useState("")
  const[matricPassYear,setMatricPassYear]=useState("")
  const[matricPassSchool,setMatricPassSchool]=useState("")
  const[matricPassBoard,setMatricPassBoard]=useState("")
  const[matricPassPercentage,setMatricPassPercentage]=useState("")
  const[matricPassCertificate,setMatricPassCertificate]=useState(null)
  const[higherPassYear,setHigherPassYear]=useState("")
  const[higherPassSchool,setHigherPassSchool]=useState("")
  const[higherPassStream,setHigherPassStream]=useState("")
  const[higherPassBoard,setHigherPassBoard]=useState("")
  const[higherPassPercentage,setHigherPassPercentage]=useState("")
  const[higherPassCertificate,setHigherPassCertificate]=useState(null)
  const[adhaarPic,setAdhaarPic]=useState(null)
  const setformitems = () => {
    if(show === true)
    {
      setShow(false)
    }
  else{
       setShow(true)
  }
  }

  const addStudentData = async() =>{
    
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
                            <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)}></input>
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control" onChange={(e)=>setLastName(e.target.value)}></input>
                            <label className="form-label">Gender</label>
                            <select className="form-control" onChange={(e)=>setGender(e.target.value)}>
                              <option>Select Gender...</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </select>
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" onChange={(e)=>setDateOfBirth(e.target.value)}></input>
                            <label className="form-label">Phone Number</label>
                            <input type="text" className="form-control" onChange={(e)=>setPhone(e.target.value)}></input>
                            <label className="form-label">Email Id</label>
                            <input
                              type="email"
                              className="form-control" onChange={(e)=>setEmail(e.target.value)}
                            ></input>
                            <label className="form-label">Adhaar Card Number</label>
                            <input type="text" className="form-control" onChange={(e)=>setAdhaar(e.target.value)}></input>
                            <label className="form-label">Course</label>
                            <select className="form-control" onChange={(e)=>setCourse(e.target.value)}>
                              <option>Select Course...</option>
                              <option>DCA</option>
                              <option>'O' Level</option>
                              <option>PGDCA</option>
                            </select>
                            <label className="form-label">Student Pic</label>
                            <input type="file" className="form-control" onChange={(e)=>setStudentPic(e.target.value)}></input>
                            <label className="form-label">Father Name</label>
                            <input type="text" className="form-control" onChange={(e)=>setFatherName(e.target.value)}></input>
                            <label className="form-label">Mother Name</label>
                            <input type="text" className="form-control" onChange={(e)=>setMotherName(e.target.value)}></input>
                            <label className="form-label">Address</label>
                            <textarea className="form-control" onChange={(e)=>setAddress(e.target.value)}></textarea>
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
                        <input type="text" className="form-control" onChange={(e)=>setMatricPassYear(e.target.value)}></input>
                        <label className="form-label">10th Passing School Name</label>
                        <input type="text" className="form-control" onChange={(e)=>setMatricPassSchool(e.target.value)}></input>
                        <label className="form-label">10th Board</label>
                        <input type="text" className="form-control" onChange={(e)=>setMatricPassBoard(e.target.value)}></input>
                        <label className="form-label">10th Percentage</label>
                        <input type="text" className="form-control" onChange={(e)=>setMatricPassPercentage(e.target.value)}></input>
                        <label className="form-label">10th Certificate</label>
                        <input type="file" className="form-control" onChange={(e)=>setMatricPassCertificate(e.target.value)}></input>
                        <label className="form-label">12th Passing Year</label>
                        <input type="text" className="form-control" onChange={(e)=>setHigherPassYear(e.target.value)}></input>
                        <label className="form-label">12th Passing School Name</label>
                        <input type="text" className="form-control" onChange={(e)=>setHigherPassSchool(e.target.value)}></input>
                        <label className="form-label">12th Stream</label>
                        <input type="text" className="form-control" onChange={(e)=>setHigherPassStream(e.target.value)}></input>
                        <label className="form-label">12th Board</label>
                        <input type="text" className="form-control" onChange={(e)=>setHigherPassBoard(e.target.value)}></input>
                        <label className="form-label">12th Percentage</label>
                        <input type="text" className="form-control" onChange={(e)=>setHigherPassPercentage(e.target.value)}></input>
                        <label className="form-label">12th Certificate</label>
                        <input type="file" className="form-control" onChange={(e)=>setHigherPassCertificate(e.target.value)}></input>
                        <label className="form-label">Adhaar Card</label>
                        <input type="file" className="form-control" onChange={(e)=>setAdhaarPic(e.target.value)}></input>
                        <button type="button" className="btn btn-primary" onClick={setformitems}>Previous</button>
                        <button type="button" className="btn btn-primary" onClick={addStudentData}>Enroll</button>
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
