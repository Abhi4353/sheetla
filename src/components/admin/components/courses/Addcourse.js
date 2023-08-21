import React from 'react'

const Addcourse = () => {
  return (
    <>
    <div className='container-fluid student-form'>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <div className='course-form'>
                            <h1>Add New Course</h1>
                            <div className='form-group'>
                             <form>
                                <div className='add-course-form'>
                                   <label className='form-label'>Course Title</label>
                                   <input type='text' className='form-control'></input>
                                   <label className='form-label'>Course Description</label>
                                   <input type='text' className='form-control'></input>
                                   <label>Course Pic</label>
                                   <input type='file' className='form-control'></input>
                                   <label className='form-label'>Course Duration</label>
                                   <input type='text' className='form-control'></input>
                                   <label className='form-label'>Course Fees</label>
                                   <input type='text' className='form-control'></input>
                                   <button type='button' className='btn btn-primary'>Add Course</button>
                                </div>
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

export default Addcourse
