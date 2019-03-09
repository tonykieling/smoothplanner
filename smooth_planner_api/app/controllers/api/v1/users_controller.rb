module Api::V1
  class UsersController < ApplicationController
    def show
      @user = User.find(params[:id])
      @trip = @user.trips.order(:time_start)
      render json: @trip
    end
  end
end