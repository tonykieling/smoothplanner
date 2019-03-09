import React, { Component } from 'react';
import axios from 'axios';

export default class RecomendationCard extends Component {
  constructor(){
    super();
    this.state = {
      suggestions: [{name: '',}],
      index: 0
    }
    this.fetchRecommendations = this.fetchRecommendations.bind(this);
  }

  fetchRecommendations(item_id) {
    console.log("Fetching recommendations from the server", item_id)
    axios.get(`http://localhost:3001/api/v1/items/${item_id}.json`)
      .then(response => {
        this.setState({suggestions: response.data.results})
        console.log(this.state.suggestions)
      })
      .catch(error => {
        console.log(error )
      })
  }
  handleLeftClick = () => {
    let newIndex, currentIndex = this.state.index;
    if(currentIndex === 0) {
      newIndex = 19
    } else {
      newIndex = currentIndex - 1
    }
    this.setState({index: newIndex})
  }
  handleRightClick = () => {
    let newIndex, currentIndex = this.state.index;
    if(currentIndex === 19) {
      newIndex = 0
    } else {
      newIndex = currentIndex + 1
    }
    this.setState({index: newIndex})
  }
  componentDidUpdate(prevProps) {
    if(this.props.item_id && (this.props.item_id !== prevProps.item_id)) {
      console.log("yeah", this.props.item_id)
      this.fetchRecommendations(this.props.item_id)
    }
  }



  render() {
    return (
        <div className="card">
          <div className="card-header">
            Suggestions for you
          </div>
          <div className="card-body row">
            <div className="col-4">
              <i className="fas fa-chevron-left fa-5x carousel-pointer" onClick={this.handleLeftClick}></i>
            </div>
            <div className="col-4">
              <p className="card-text">
                {this.state.suggestions[this.state.index].name}
                Rating: {this.state.suggestions[this.state.index].rating} | {this.state.suggestions[this.state.index].user_ratings_total} users | Price: {this.state.suggestions[0].price_level}
                <a href="#" className="btn btn-primary">Add to Itinerary</a>
              </p>
            </div>
            <div className="col-4">
              <i className="fas fa-chevron-right fa-5x carousel-pointer" onClick={this.handleRightClick}></i>
            </div>
              
            
          </div>
          
      </div>
    )
  }
}
