import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'hTZwEbN4WLDaTWkHUeZABlyj0gHN6Y16';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
      super();
      
      this.state = {
        reviews: []
      };
    }

    handleFetch = () => {
      fetch(URL)
        .then(response => response.json())
        .then(reviewsData => this.setState({ reviews: reviewsData.results }, console.log("reviews after fetch", this.state.reviews)))
    }

    componentDidMount() {
      fetch(URL)
        .then(response => response.json())
        .then(reviewsData => this.setState({ reviews: reviewsData.results }, console.log("reviews after fetch", this.state.reviews)))
      //console.log('review after fetch' this.state.reviews)
    }

    render() {
      return (
      <div className="latest-movie-reviews">
      {<MovieReviews reviews={this.state.reviews} />}
      </div>
      )
    }

}