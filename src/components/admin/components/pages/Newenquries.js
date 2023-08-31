import React, { useEffect,useState } from 'react'
import Adminlayout from '../layout/Adminlayout'
import axios from 'axios';
import { Backend_URL } from '../../../../config/config';
import { useParams } from 'react-router-dom';
const Newenquries = () => {
    const[data,setData]=useState([]);
     const {_id} = useParams();
    const getenquirydata = async() =>{
      const res = await axios.get(`${Backend_URL}/getenquiry`)
      setData(res.data)
    }

    const setStatus = async() => {
        console.log("ID Is ",_id)
        const res = await axios.post(`${Backend_URL}/updateenquiry?id=${_id}`)
        getenquirydata();
    }

    useEffect(()=>{
        getenquirydata();
    },[])
  return (
    <>
    <Adminlayout>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                   <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <div className='table-of-enquries'>
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile Number</th>
                                        <th>Course</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    {data.map((ele,key)=> (
                                        <tbody key={key}>
                                            <tr>
                                          <td>{ele.Name}</td>
                                          <td>{ele.Email}</td>
                                          <td>{ele.Mobile}</td>
                                          <td>{ele.Course}</td>
                                          <td><button type='button' className='btn btn-primary' onClick={(e)=>setStatus(e,ele?._id)}>Mark as Read</button></td>
                                          </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </Adminlayout>
    </>
  )
}

export default Newenquries
