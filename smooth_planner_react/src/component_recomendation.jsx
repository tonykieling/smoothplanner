import React, { Component } from 'react';
import axios from 'axios';

export default class RecomendationCard extends Component {
  constructor(){
    super();
    this.state = {
      suggestions: [{}],
      index: 0
    }
  }

  fetchRecommendations(item_id) {
    console.log("Fetching recommendations from the server")
    axios.get(`http://localhost:3001/api/v1/items/${item_id}.json`)
      .then(response => {
        this.setState({suggestions: response.data.results})
        console.log(this.state.suggestions[0].name)
      })
      .catch(error => {
        console.log(error )
      })
  }

  componentDidMount() {
    this.fetchRecommendations(this.props.item_id);
  }
  render() {
    return (
        <div className="card">
          <div className="card-header">
            Suggestions for you
          </div>
          <i class="fas fa-chevron-left fa-9x"></i>
          <div className="card-body">
            <p className="card-text">
            <a href="https://www.google.com/search?q=miku+vancouver&place_id=ChIJlyu4u4NxhlQRkUpN_iFwl8Q">
              {this.state.suggestions[this.state.index].name}
            </a>
              Rating: {this.state.suggestions[this.state.index].rating} | {this.state.suggestions[this.state.index].user_ratings_total} users | Price: {this.state.suggestions[0].price_level}
            </p>
            <a href="#" class="btn btn-primary">Add to Itinerary</a>
          </div>
          <i class="fas fa-chevron-right fa-9x"></i>
      </div>
    )
  }
}
