module Api::V1
  class TripsController < ApplicationController
    def index
    end

    def show
      @trip = Trip.find(params[:id])
      @items = @trip.items.order(:time_start)
      render json: @items
    end
  end
end
