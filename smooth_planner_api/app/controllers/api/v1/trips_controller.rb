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

    def destroy
      puts "params= #{params}"
      trip = Trip.find(params[:id])
      user = User.find(params[:user])
      
      puts "user= #{user.id}"
      puts "trip= #{trip.id}"
      trip.destroy

      trip = user.trips.order(:time_start)
      render json: trip

    end

    def update
      @trip = Trip.find(params[:id])
      @user = User.where(params[:email])
      @successful = {message: "User was successfully added"}
      # if @user?
      #   @trip.users << @user
      #   render json: @successful 
      # else
      #   render json: @item.errors, status: :unprocessable_entity
      # end
    end

    private
    def trip_params
      params.require(:trip).permit(:name, :user_id)
    end
  end
end
