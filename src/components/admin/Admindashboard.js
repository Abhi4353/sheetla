import React from 'react'
import Adminlayout from './components/layout/Adminlayout';
import './Admin.css'
import Dashboardicons from './components/icons/Dashboardicons';
const Admindashboard = () => {
  return (
    <>
<Adminlayout>
<div className='container-fluid student-form'>
  <div className='row'>
    <div className='col=sm-12 col-md-12 col-lg-12 col-xl-12'>
    <Dashboardicons/>
    </div>
  </div>
</div>
</Adminlayout>
    </>
  )
}

export default Admindashboard
