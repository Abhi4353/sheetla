import React from 'react'
import { Link } from 'react-router-dom';
const Admintopnav = () => {
  return (
    <>
<div className='container-fluid sidebar'>
  <div className='row'>
    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
      <div className='sidebar-links'>
        <ul>
        <li><Link to="/admindashboard"><i class="fa fa-desktop" aria-hidden="true"></i>&nbsp;&nbsp;Dashboard</Link></li>
          <li><Link><i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;&nbsp;Students</Link><ul>
          <li><Link to="/studentregistration"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add New Student</Link></li>
          <li><Link><i class="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;Manage Students</Link></li>
          <li><Link><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Student Request</Link></li>
          </ul></li>
          <li><Link><i class="fa fa-book" aria-hidden="true"></i>&nbsp;&nbsp;Courses</Link>
          <ul>
          <li><Link to="/newcourse"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add New Course</Link></li>
          <li><Link><i class="fa fa-clone" aria-hidden="true"></i>&nbsp;&nbsp;Manage Courses</Link></li>
          </ul></li>
          <li><Link><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Staff</Link><ul>
          <li><Link to="/newstaffmember"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add New Staff</Link></li>
          <li><Link><i class="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;Manage Staff</Link></li>
          </ul></li>
          <li><Link><i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;&nbsp;Gallery</Link><ul>
          <li><Link to="/addimage"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add Gallery Image</Link></li>
          <li><Link><i class="fa fa-file-image-o" aria-hidden="true"></i>&nbsp;&nbsp;Manage Images</Link></li>
          </ul></li>
          <li><Link><i class="fa fa-comment" aria-hidden="true"></i>&nbsp;&nbsp;Contact Us Data</Link>
          <ul><li><Link to=""><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;New Query</Link></li>
          <li><Link><i class="fa fa-envelope-open" aria-hidden="true"></i>&nbsp;&nbsp;Read Query</Link></li>
          </ul></li>
          <li><Link><i class="fa fa-commenting" aria-hidden="true"></i>&nbsp;&nbsp;Enquiry Form Data</Link>
          <ul><li><Link to="/newenquries"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;New Enquries</Link></li>
          <li><Link><i class="fa fa-envelope-open" aria-hidden="true"></i>&nbsp;&nbsp;Read Enquries</Link></li>
          </ul></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Admintopnav
