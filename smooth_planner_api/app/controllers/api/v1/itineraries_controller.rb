module Api::V1
  class ItinerariesController < ApplicationController
    def index
      @itineraries = Itinerary.all
      render json: @itineraries
    end
    def show
      # @itinerary = Itinerary.find_by id: params[:id]
      google_reccomendations(@itinerary)
      # render json: @itinerary
    end

    private 
    def google_reccomendations(itinerary)
      # @items = itinerary.items

      # Below makes HTTP requests to google 
      # Places API https://developers.google.com/places/web-service/search#TextSearchRequests
      # HTTP.get("http://example.com/resource", :params => {:foo => "bar"})

      @recos = HTTP.get("https://maps.googleapis.com/maps/api/place/textsearch/json?", :params => {
        :query => "restaurants",
        :key => Rails.application.secrets.google_api_key,
        :radius => "10000",
        :location => "49.2803221,-123.112195", # hardcoded for now to VPL's lat and long
        :region => "CA",# hardcoded for Canada, multiple region coding better refines the results"
        :type => "restaurant"
        }).body
      render json: @recos
    end
  end
end
