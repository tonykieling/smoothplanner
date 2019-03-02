class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :title
      t.datetime :time_start
      t.datetime :time_end
      t.string :item_type
      t.string :details
      t.string :confirmation
      t.string :city_depart
      t.string :city_arrival
      t.string :venue
      t.string :address
      t.integer :phone
      t.references :itinerary, foreign_key: true

      t.timestamps
    end
  end
end
