import React from 'react'
import "../sass/offer/offer.css"
const Offer = ({offers}) => {
  return (
    <div className='offersection'>
        {
            offers.map((ele, ind)=>(
                <a href= {ele.url}  > <img src={ele.image} alt='img' /></a>
            ))
        }
    </div>
  )
}

export default Offer