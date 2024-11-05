import React from 'react'
import { Carousel, CarouselCaption } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const Banner = ({banner}) => {
  return (
    <Carousel>
        {
            banner.end.map((ele,ind)=>(
                <Carousel.Item key={ind} id='banner' interval={2000} keyboard={true} >
                    <img className='d-block w-100' id='bannerImage' src={ele.image} alt={ind} />
                    <CarouselCaption>
                        <h3>{ele.name}</h3>
                        <p>{ele.source}</p>
                        <p>{ele.description}</p>
                        <u>Read More</u>
                    </CarouselCaption>
                </Carousel.Item>
                
            ))
        }
    </Carousel>
  )
}

export default Banner