class ItinToTrip < ActiveRecord::Migration[5.1]
  def change
    rename_table :itineraries, :trips
  end


end
