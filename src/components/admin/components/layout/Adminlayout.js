import React from 'react'
import Header from '../../../navigationbar/Header'
import Adminheader from './Adminheader'
import Adminfooter from './Adminfooter'
import Adminsidebar from './Adminsidebar'
const Adminlayout = (props) => {
  return (
  <>
     <Header/> 
     <Adminsidebar/>
     <Adminheader/>
   {props.children}
   <Adminfooter/>
  </>
  )
}

export default Adminlayout
