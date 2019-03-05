module Api::V1
  class ItemsController < ApplicationController
    def index
    end
    def show
      google_reccomendations(params[:id])
    end

    private 
    def google_reccomendations(item)
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
        :type => "restaurant"/ points_of_interest / 
        }).body
      render json: @recos
    end
  end
end
