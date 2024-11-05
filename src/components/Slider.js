import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Carousel } from 'bootstrap'

const Slider = ({start}) => {
    return (
        <Carousel>
            {
                start.map((ele,ind)=>(
                    <Carousel.Item>
                        <img className='d-block w-100' src={ele} alt='img'  />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Slider