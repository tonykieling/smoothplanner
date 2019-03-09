//  form autocomplete component. THis component's state saves the address. 
//  to completely integrate it, need to pass a helper function to save it in parent's state.
import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
    console.log("state", this.state);
  };
 
  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => {
        this.props.handleAddress(results[0].formatted_address)
        return getLatLng(results[0])
      })
      .then(latlng => {
        this.props.handleLatLng(latlng)
      })
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Type location...',
                className: 'location-search-input form-control col-sm-10',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose - this needs to be changed in line with the overall styling of the app
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}


