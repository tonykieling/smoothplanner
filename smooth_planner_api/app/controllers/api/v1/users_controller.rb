module Api::V1
  class UsersController < ApplicationController
    def show
      @user = User.find(params[:id])
      @trip = @.order(:time_start)
      @trips = Trip.all
      render json: @trips
    end
  end
end