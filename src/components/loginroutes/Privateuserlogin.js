import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function Privateloginroute() {
    const token2 = localStorage.getItem("token")
    return token2 ? <Outlet/> : <Navigate to = "/login"/>
}
export default Privateloginroute;
