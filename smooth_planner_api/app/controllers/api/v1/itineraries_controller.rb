module Api::V1
  class ItinerariesController < ApplicationController
    def index
      @itineraries = Itinerary.all
      render json: @itineraries
    end

    def show
      @itinerary = Itinerary.find(params[:id])
      @items = @itinerary.items.order(:time_start)
      render json: @items
    end

    def create
      puts params
    end
  end
end
