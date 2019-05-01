class Price < ApplicationRecord

  monetize :price_cents
  belongs_to :product

  
  validates :price_cents, presence: true
  

end
