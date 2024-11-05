import React from 'react'
import ReviewCard from "./ReviewCard.js"
import '../styles/ProductReview.css'
const ProductReview = ({productReviews}) => {
  return (
    <div className='ProductReview'>
        {
            productReviews.map((ele,ind)=>(
                <ReviewCard key={ele.image} image={ele.image} review={ele.review} name={ele.name} price={ele.price} />
            ))
        }
    </div>
  )
}

export default ProductReview