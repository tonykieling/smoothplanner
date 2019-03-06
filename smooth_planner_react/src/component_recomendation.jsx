import React, { Component } from 'react';

export default class RecomendationCard extends Component {
  constructor(){
    super()
    this.state = {
      result: {
        "formatted_address": "200 Granville St #70, Vancouver, BC V6C 1S4, Canada",
        "geometry": {
            "location": {
                "lat": 49.2870468,
                "lng": -123.1128433
            },
            "viewport": {
                "northeast": {
                    "lat": 49.28847567989272,
                    "lng": -123.1116478701073
                },
                "southwest": {
                    "lat": 49.28577602010728,
                    "lng": -123.1143475298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "c9b9eeeca0fe7ca2dd34e87b101133ad76d3d0eb",
        "name": "Miku Vancouver",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108342013443605853314/photos\">Ben Klein</a>"
                ],
                "photo_reference": "CmRaAAAAGyw3XLvLaVQtDeaj0Pd2c55xP_tGez3t6T8HzdX39qd7GMSjUnXQFICnr7iykh8SdLMs7jjrBbyuMamB4HLy1KSKq4-rNVjF-MznGWYOOsFXwQ6eka-WJJmfswK5g2mrEhCRo0a6_JG72YNHYzBlW6wQGhRY-FVerLRjbmZ9PL3G18icSRpW4A",
                "width": 4160
            }
        ],

        "place_id": "ChIJlyu4u4NxhlQRkUpN_iFwl8Q",
        "plus_code": {
            "compound_code": "7VPP+RV Vancouver, British Columbia, Canada",
            "global_code": "84XR7VPP+RV"
        },
        "price_level": 3,
        "rating": 4.5,
        "reference": "ChIJlyu4u4NxhlQRkUpN_iFwl8Q",
        "types": [
            "night_club",
            "bar",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "user_ratings_total": 2554
    }
    }

  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Suggestions for you
        </div>
        <div className="card-body">
          
          <p className="card-text">
          <a href="https://www.google.com/search?q=miku+vancouver&place_id=ChIJlyu4u4NxhlQRkUpN_iFwl8Q">
            {this.state.result.name}  
          </a>
            Rating: {this.state.result.rating} | {this.state.result.user_ratings_total} users | Price: {this.state.result.price_level}
          </p>
          <a href="#" class="btn btn-primary">Add to Itinerary</a>
        </div>
      </div>
    )
  }
}
