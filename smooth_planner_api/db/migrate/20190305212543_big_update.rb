class BigUpdate < ActiveRecord::Migration[5.1]
  def change
    change_table :items do |t|
      t.string :url
      t.string :geo_location
    end

    change_table :users do |t|
      t.string   "password_digest"
      t.boolean :suggestions
    end

  end
end
