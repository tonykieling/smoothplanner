module Api::V1
  class ItinerariesController < ApplicationController
    def index
      @itineraries = Itinerary.all
      render json: @itineraries
    end
  end
end
