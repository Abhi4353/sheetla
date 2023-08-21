import React from 'react'
import Layout2 from './Layout2'
import Footer from '../components/Footer'

const Layout = (props) => {
  return (
    <>   
     <Layout2 />
     {props.children}
    <Footer />
    </>

  )
}

export default Layout
