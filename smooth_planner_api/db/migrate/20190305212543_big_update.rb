class BigUpdate < ActiveRecord::Migration[5.1]
  def change
    change_table :items do |t|
      t.string :url
    end
    
    change_table :itineraries do |t|
      t.boolean :suggestions
      
    end
  end
end
