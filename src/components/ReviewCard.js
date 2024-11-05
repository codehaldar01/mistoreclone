import React from 'react'
import '../styles/ReviewCard.css'
const ReviewCard = ({name,price,image,review}) => {
  return (
    <div className='ReviewCard'>
        <img src={image} alt="im" />
        <p>{review}</p>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default ReviewCard