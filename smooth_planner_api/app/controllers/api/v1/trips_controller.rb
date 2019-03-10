module Api::V1
  class TripsController < ApplicationController
    def index
    end

    def show
      @trip = Trip.find(params[:id])
      @items = @trip.items.order(:time_start)
      # puts @items.inspect
      render json: @items
    end

    def create
      newtrip = Trip.new(trip_params)
      newtrip.save
    end

    def destroy
      trip = Trip.find(params[:id])
      user = User.find(params[:user])
      trip.destroy
      trip = user.trips.order(:time_start)
      render json: trip
    end

    def update
      @trip = Trip.find(params[:id])
      @user = User.where("email = ?", params[:email])
      @successful = [{ message: "User was successfully added" }]
      @unsuccessful = [{ message: "No user exists with that email so could not be added to this trip." }]
      if (@user.length == 1)
        @trip.users << @user
        render json: @successful
      else
        render json: @unsuccessful
      end
    end

    private
    def trip_params
      params.require(:trip).permit(:name, :user_id)
    end
  end
end
