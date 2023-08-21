import React from 'react'
import HomeCrousel from '../components/Crousel/HomeCrousel'
import Enrollhere from '../components/Enroll/Enrollhere'
import Chairman from '../components/chairman/Chairman'
import Gallery from '../components/Gallery/Gallery'
import Subscribe from '../components/subscribe/Subscribe'
import Layout from '../layouts/Layout'
const Home = () => {
  return (
    <>
    <Layout>
    <HomeCrousel/>
      <Enrollhere/>
      <Chairman />
      <Gallery/>
      <Subscribe/>
    </Layout>
    </>
      
    
  )
}

export default Home
