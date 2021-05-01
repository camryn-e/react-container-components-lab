// Code MovieReviews Here

// const MovieReviews = 

import React from 'react';


// const MovieReviews = ({ reviews }) => (
//     <div className="review-list">
//         <div className="review">{reviews}</div>
//         {/* reviews.map(review =>  <div className="review">{review}</div>)} */}
//     </div>
// )
  
const MovieReviews = ({reviews}) => {
    const reviewList = reviews.map(review => (<div className="review">{console.log("rev",review)}</div>))
    return (  
      <div className="review-list">
            {reviewList}
        </div>
    )
}

// const MovieReviews = ({reviews}) => {
//     <div className="review-list">
//         {/* <div className="review">

//         </div> */}
//         {reviews.map(review =>  <div className="review"> { review } </div>)}
//     </div>
// }

export default MovieReviews
