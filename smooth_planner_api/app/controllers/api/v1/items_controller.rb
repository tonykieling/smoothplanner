module Api::V1
  class ItemsController < ApplicationController
    def index
      @items = Item.all
      puts "HEREEEE"
      render json: @items
    end

    def destroy
      @item = Item.find(params[:id])
      
      if @item.destroy
        head :no_content, status: :ok
      else
        render json: @item.errors, status: :unprocessable_entity
      end

    end



    # private

    # def item_params
    #   params.require(:item).permit(:id)
    # end

  end
end