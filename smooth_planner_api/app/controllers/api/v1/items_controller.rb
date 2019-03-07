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
      google_reccomendations(params[:id])
    end

    def create
      newitem = Item.new(item_params)
      puts newitem
      newitem.save
    end


    private 
    def google_reccomendations(item)
      # @items = itinerary.items

      # Below makes HTTP requests to google 
      # Places API https://developers.google.com/places/web-service/search#TextSearchRequests
      # HTTP.get("http://example.com/resource", :params => {:foo => "bar"})

      @recos = HTTP.get("https://maps.googleapis.com/maps/api/place/textsearch/json?", :params => {
        :query => "restaurants",
        :key => Rails.application.secrets.google_api_key,
        :radius => "10000",
        :location => "49.2803221,-123.112195", # hardcoded for now to VPL's lat and long
        :region => "CA",# hardcoded for Canada, multiple region coding better refines the results"
        :type => "restaurant"
        }).body
      render json: @recos
    end

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
        :geo_location
      )
    end

  end
end
