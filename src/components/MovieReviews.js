// Code MovieReviews Here

// const MovieReviews = 

import React from 'react';


const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        {reviews.map(review =>  <div className="review">
        { review, console.log(review)}
        </div>)}
    </div>
  )
  
  export default MovieReviews;