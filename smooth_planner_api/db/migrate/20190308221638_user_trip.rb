class UserTrip < ActiveRecord::Migration[5.1]
  def change
    create_join_table :users, :trips
    remove_column :trips, :user_id
  end
end
