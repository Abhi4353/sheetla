import React from 'react'

const Addimages = () => {
  return (
    <>
    <div className='container-fluid student-form'>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
               <div className='container'>
                <div className='row'>
                   <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                      <div className='gallery-images-add'>
                         <h1>Add New Image</h1>
                         <div className='form-group'>
                            <form>
                                <label className='form-label'>Image Title</label>
                                <input className='form-control' type='text'></input>
                                <label className='form-label'>Image</label>
                                <input type="file" className="form-control"></input>
                                <label className='form-label'>Image Alternate text</label>
                                <input type='text' className='form-control'></input>
                                <button type='button' className='btn btn-primary'>Add Image</button>
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

export default Addimages
