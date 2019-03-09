class AddFkCascadeDelete < ActiveRecord::Migration[5.1]
  def change
    remove_foreign_key :items, :trips
    add_reference :items, :trips, foreign_key: true, on_delete: :cascade
  end
end

