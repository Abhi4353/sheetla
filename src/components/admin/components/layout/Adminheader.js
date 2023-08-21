import React, { useEffect,useState } from 'react'
import ajay from '../../../../images/ajay.jpeg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Backend_URL } from '../../../../config/config'
const Adminheader = () => {
  const[name,setName]=useState("");
  const[pic,setPic]=useState(null)
  const id = localStorage.getItem("token");
  const navigate = useNavigate();

  const getadmindata = async() => {
    const res = await axios.get(`${Backend_URL}/getadmindata?id=${id}`)
    setName(res.data.FirstName)
    setPic(res.data.pic)
  }

  const logoutfromaccount = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }
  useEffect(()=>{
 getadmindata();
  },[id])
  return (
   <>
   <div className='container-fluid header-top'>
    <div className='row'>
        <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
          <div className='dashboard-head'>
            <Link to="/admindashboard">Admin Dashboard</Link>
          </div>
        </div>
        <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
          <div className='admin-header-text'>
          <img src={ajay} alt='admin_pic'></img>
              
               <div class="dropdown show">
            <Link class="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <p>&nbsp;Welcome {name}</p>
         </Link>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <p class="dropdown-item" onClick={logoutfromaccount}>Logout</p>
  </div>
</div>
          </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Adminheader
