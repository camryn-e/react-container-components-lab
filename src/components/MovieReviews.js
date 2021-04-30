// Code MovieReviews Here

// const MovieReviews = 

import React from 'react';


const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        {reviews.map(review =>  <div className="review">
        { review }
        </div>)}
    </div>
  )
  
  export default MovieReviews;