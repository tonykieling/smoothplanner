class Item < ApplicationRecord
  validates :time_start, presence: true
  belongs_to :trip
end
