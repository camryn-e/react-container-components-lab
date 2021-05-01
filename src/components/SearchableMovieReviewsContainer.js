import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'hTZwEbN4WLDaTWkHUeZABlyj0gHN6Y16';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
      super();
      
      this.state = {
        searchTerm: '',
        reviews: []
      };
    }


    // this.setState({

    // })

    handleChange = (e) => {
        this.setState(prevState => {
          return {
            searchTerm: e.target.value
          }
        }, () => console.log(this.state))
      }

    handleSubmit = () => {
      fetch(URL + this.state.searchTerm)
        .then(response => response.json())
        .then(reviewsData => this.setState({ reviews: reviewsData.results }))
        // {<MovieReviews reviews={this.state.reviews}/>}
    }

    render() {
      return (
        <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Search
                <input  
                type="text" 
                value={this.state.searchTerm} 
                onChange={e => this.handleChange(e)} 
                />
              </label>
            </div>
            <div>
              <button type="submit">Search</button>
            </div>
            <MovieReviews reviews={this.state.reviews}/>
        </form>
        </div>
    //   <div className="searchable-movie-reviews">
    //   <MovieReviews reviews={this.state.reviews} />
    //   </div>
      )
    }

}