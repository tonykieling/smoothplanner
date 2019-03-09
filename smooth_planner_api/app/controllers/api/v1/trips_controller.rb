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

    def update
      @trip = Trip.find(params[:id])
      @user = User.where("email = ?", params[:email])
      puts params[:email]
      puts @user.inspect
      # @successful = {message: "User was successfully added"}
      if (@user.length == 1)
        @trip.users << @user
        render json: @trip.users
      # else
        # render json: @item.errors, status: :unprocessable_entity
      end
    end

    private
    def trip_params
      params.require(:trip).permit(:name, :user_id)
    end
  end
end
