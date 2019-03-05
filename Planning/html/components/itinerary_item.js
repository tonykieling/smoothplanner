import React, { Component } from 'react'

// Itinerary should receive Itinerary_items and Documents, as well
const Itinerary = ({itinerary}) => {

  if (itinerary.type === "T") {   //mounts TRANSPORT itineray_item component
    <div className="transport-item" key={itinerary.id}>
      <h1> {itinerary.title} </h1>  {/* consider only the title*/}
      {/* OR consider show hte origin - destiny as title*/}
      <h2> Going FROM {itinerary.city_depart} TO {itinerary.city_arrival}</h2>  {/* consider only the title*/}
      <h2> Departure: {itinerary.time_start} </h2>  {/* format a nice date and time showing the trip starting*/}
      <h2> Arrival: {itinerary.time_end} </h2>  {/* format a nice date and time showing the trip ending*/}
      <h2> Venue: {itinerary.venue} </h2> {/* here we display the place where the transportation will depart*/}
      <h3> Confirmation #: {itinerary.confirmation} </h3> {/* ticket number*/}
      <h3> Files uploaded: </h3>  {/* figure out how to display the document (plura? all documents or only for that specific user?) */}
      <h3> Details: {itinerary.details}</h3> {/* details typed by the user*/}
    </div>

  } else if (itinerary.type === "A") { //mounts ACCOMMODATION itineray_item component
      <div className="accommodation-item" key={itinerary.id}>

        {/* consider the title which the user has given to that accommodation. If empty, show the accommodation's name */}
        {itinerary.title? (
          <h1> {itinerary.venue} </h1>
        ) : (
          <h2> {itinerary.title} </h2>
        )}

        <h2> Starts at: {itinerary.time_start} </h2>  {/* format a nice date and time showing the accommodation starting*/}
        <h2> Ends at: {itinerary.time_end} </h2>  {/* format a nice date and time showing the accommodation ending*/}
        <h3> Confirmation #: {itinerary.confirmation} </h3> {/* reservation code*/}
        <h3> Files uploaded: </h3>  {/* figure out how to display the document (plura? all documents or only for that specific user?) */}
        <h2> Venue: {itinerary.venue} </h2> {/* here we display the place where the accommodation will be */}
        <h2> Address: {itinerary.address} </h2> {/* here we display the accommodation's address */}
        <h2> Phone: {itinerary.phone} </h2> {/* here we display the accommodation's phone */}
        <h3> Details: {itinerary.details}</h3> {/* details typed by the user */}
      </div>

  } else if (itinerary.type === "E") {
    <div className="event-item" key={itinerary.id}>
      <h1> {itinerary.title} </h1>  {/* consider the title which the user has gaven to the event*/}
      <h2> Date and time to start: {itinerary.time_start} </h2>  {/* format a nice date and time showing the accommodation starting*/}
      <h2> Ends at: {itinerary.time_end} </h2>  {/* format a nice date and time showing the accommodation ending*/}
      <h3> Confirmation #: {itinerary.confirmation} </h3> {/* reservation code*/}
      <h3> Files uploaded: </h3>  {/* figure out how to display the document (plura? all documents or only for that specific user?) */}
      <h2> Venue: {itinerary.venue} </h2> {/* here we display the place where the accommodation will be */}
      <h2> Address: {itinerary.address} </h2> {/* here we display the accommodation's address */}
      <h2> Phone: {itinerary.phone} </h2> {/* here we display the accommodation's phone */}
      <h3> Details: {itinerary.details}</h3> {/* details typed by the user */}
    </div>
}

}

export default Itinerary
