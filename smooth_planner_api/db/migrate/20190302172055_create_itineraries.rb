class CreateItineraries < ActiveRecord::Migration[5.1]
  def change
    create_table :itineraries do |t|
      t.string :name
      t.datetime :time_start
      t.datetime :time_end
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
