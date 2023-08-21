import React from 'react'
import { Carousel } from 'react-bootstrap'
import clas2 from '../../images/clas2.jpg'
import lab from '../../images/lab.jpg'
import tour4 from '../../images/tour4.jpg'
const HomeCrousel = () => {
  return (
   <>
   <Carousel   autoPlay={true}
    interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 crousel-image"
            src={clas2}
            alt="Class Room"
          />
          <Carousel.Caption>
            <h3>Class Room</h3>
            <p>Here you learn a lot of new things</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 crousel-image"
            src={lab}
            alt="Lab"
          />
          <Carousel.Caption>
            <h3>Computer Lab</h3>
            <p>Here you can show your creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 crousel-image"
            src={tour4}
            alt="Tour"
          />
          <Carousel.Caption>
            <h3>Tour</h3>
            <p>Travelling can relax your mind</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
   </>
  )
}

export default HomeCrousel
