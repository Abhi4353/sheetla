import React from 'react'
import tour1 from '../images/tour1.jpeg'
import tour3 from '../images/tour3.jpeg'
import tour4 from '../images/tour4.jpg'
import tour5 from '../images/tour5.jpeg'
import tour6 from '../images/tour6.jpg'
import Layout from '../layouts/Layout'
const Maingallery = () => {
  return (
    <>
  <Layout>
   <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='container-fluid'>
            <div className='row'>
                 <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4' >
                 <div className='single-image'>
                   <img src={tour1} alt='gallery'></img>
                 </div>
               </div>
               <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4' >
                 <div className='single-image'>
                   <img src={tour3} alt='gallery'></img>
                 </div>
               </div>
               <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4' >
                 <div className='single-image'>
                   <img src={tour4} alt='gallery'></img>
                 </div>
               </div>
               <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4' >
                 <div className='single-image'>
                   <img src={tour5} alt='gallery'></img>
                 </div>
               </div>
               <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4' >
                 <div className='single-image'>
                   <img src={tour6} alt='gallery'></img>
                 </div>
               </div>
              
            </div>
            
          </div>
      </div>
   </div>
   </div>
   </Layout>
    </>
  )
}

export default Maingallery
