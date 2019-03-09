module Api::V1
  class ItemsController < ApplicationController
    def index
      @items = Item.all
      render json: @items
    end

    def destroy
      @item = Item.find(params[:id])

      if @item.destroy
        # head :no_content, status: :ok
        temp_trip = @item.trip_id
        @trip = Trip.find(temp_trip)
        @items = @trip.items.order(:time_start)
        render json: @items
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end

    def show
      location = Item.find_by({id: params[:id]}).geo_location
      @recos = HTTP.get("https://maps.googleapis.com/maps/api/place/textsearch/json?", :params => {
        :query => "restaurants",
        :key => Rails.application.secrets.google_api_key,
        :radius => "10000",
        :location => location, # hardcoded for now to VPL's lat and long
        :type => "restaurant"
        }).body
      render json: JSON.parse(@recos)
    end

    def create
      newitem = Item.new(item_params)
      puts item_params
      if newitem.save
        @trip = Trip.find(newitem.trip_id)
        @items = @trip.items.order(:time_start)
        render json: @items
      end
      
    end

    def update
      item_to_update = Item.find(params[:id])
      item_to_update.update(item_params)
      if item_to_update.save
        @trip = Trip.find(item_to_update.trip_id)
        @items = @trip.items.order(:time_start)
        render json: @items
      end
    end
    



    private 
 
    def item_params
      params.require(:item).permit(
        :title, 
        :time_start, 
        :time_end, 
        :item_type,
        :details,
        :confirmation,
        :city_depart,
        :city_arrival,
        :venue,
        :address,
        :phone,
        :trip_id,
        :url,
        :geo_location,
      )
    end

  end
end
