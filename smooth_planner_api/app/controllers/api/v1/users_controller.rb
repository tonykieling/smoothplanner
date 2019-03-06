module Api::V1
  class UsersController < ApplicationController
    def show
      @trip = Trip.where(user_id: params[:id]).order(:time_start)
      render json: @trip
    end
  end
end