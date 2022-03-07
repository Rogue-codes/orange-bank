import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarouselBootstrap() {
  return (
    <div>
      <Carousel className='caro'>
        <Carousel.Item className='caroItem'>
          <img
            // className="d-block w-100% h-50px"
            className='img'
            style={{height:800}}
            src="/img1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className='caption'>
            <h1>Corporate Banking</h1>
            <p>We are on a journey to become Africa's foremost banking brand, combining our industry pioneering solutions, expertise and professionalism.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='caroItem'>
          <img
            // className="d-block w-100"
            className='img'
            src="/img2.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption className='caption'>
            <h1>ORANGE CARD</h1>
            <p>Hop on the Orange Train and enjoy smooth and seamless banking everyday.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='caroItem'>
          <img
            // className="d-block w-100"
            className='img'
            src="/img3.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption className='caption'>
            <h1>ORANGE Expatriate Account</h1>
            <p>Save, transact and remit funds in multiple currencies wherever you are</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='caroItem'>
          <img
            // className="d-block w-100"
            className='img'
            src="/img4.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption className='caption'>
            <h1>Third slide label</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselBootstrap