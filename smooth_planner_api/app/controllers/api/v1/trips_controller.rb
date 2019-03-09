module Api::V1
  class TripsController < ApplicationController
    def index
    end

    def show
      @trip = Trip.find(params[:id])
      @items = @trip.items.order(:time_start)
      render json: @items
    end

    def create
      newtrip = Trip.new(trip_params)
      newtrip.save
    end

    def update
      @trip = Trip.find(params[:id])
      @user = User.where(params[:email])
      if @user?
        @trip.users << @user
        render status: 200 plain: "Successfully added user"
      else
        render status: 400 plain: "No user with that email address"
      end
    end

    private
    def trip_params
      params.require(:trip).permit(:name, :user_id)
    end
  end
end
