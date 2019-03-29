class Brand < ApplicationRecord
  has_many :products, dependent: :destroy
  validates :name, presence: true, uniqueness: { case_sensitive: false }

  after_save :touch_products

  private
    def touch_products
      products.each { |p| p.touch }
    end
end
