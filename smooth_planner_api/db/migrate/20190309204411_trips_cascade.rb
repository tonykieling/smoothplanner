class TripsCascade < ActiveRecord::Migration[5.1]
  def change
    remove_foreign_key :items, :trips
    add_foreign_key :items, :trips, on_delete: :cascade
  end
end
