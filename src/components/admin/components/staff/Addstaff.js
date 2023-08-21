import React from 'react'

const Addstaff = () => {
  return (
   <>
   <div className='container-fluid student-form'>
    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                  <div className='staff-form'>
                    <h1>Add Staff Member</h1>
                    <div className='form-group'>
                       <form>
                         <label className='form-label'>Name</label>
                         <input type='text' className='form-control'></input>
                         <label className='form-label'>Qualification</label>
                         <input type='text' className='form-control'></input>
                         <label className='form-label'>Designation</label>
                         <input type='text' className='form-control'></input>
                         <label className='form-label'>Pic</label>
                         <input type='file' className='form-control'></input>
                         <label className='form-label'>10th Certificate</label>
                         <input type='file' className='form-control'></input>
                         <label className='form-label'>12th Certificate</label>
                         <input type='file' className='form-control'></input>
                         <label className='form-label'>Graduation</label>
                         <input type='file' className='form-control'></input>
                         <label className='form-label'>Post Graduation</label>
                         <input type='file' className='form-control'></input>
                         <label className='form-label'>Adhaar Card</label>
                         <input type='file' className='form-control'></input>
                         <label className='form-label'>Job Letter</label>
                         <input type='file' className='form-control'></input>
                         <label className='form-label'>Address</label>
                         <textarea className='form-control'></textarea>
                         <button type='button' className='btn btn-primary'>Add Staff Member</button>
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
  )
}

export default Addstaff
