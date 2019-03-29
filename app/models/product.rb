class Product < ApplicationRecord
  include Rails.application.routes.url_helpers

  PER_PAGE = 6
  PHOTO_SIZE = '400x300'

  monetize :price_cents

  has_one_attached :photo
  has_and_belongs_to_many :categories
  belongs_to :brand

  validates :name, presence: true
  validates :price_cents, presence: true
  validates :description, presence: true, length: { minimum: 50, maximum: 500 }

  before_save :categorize

  delegate :final_categories, to: :categories

  paginates_per PER_PAGE

  scope :by_prices, ->(prices) {
     where(price_cents: prices)
  }

  def category_paths
    final_categories.map(&:path)
  end 

  def public_url
    product_url(self)
  end

  def named_category_paths
    Rails.cache.fetch("#{cache_key_with_version}/named_category_paths", expires_in: 1.week) do
      category_paths.map { |p| p.map(&:name) }
    end
  end

  def brand_name
    Rails.cache.fetch("#{cache_key_with_version}/brand_name", expires_in: 1.week) do
      brand.name
    end
  end

  private
  def categorize
    cats = Category.where(id: categories.map(&:id)).final_categories
    self.categories = (cats.map(&:ancestors).flatten + cats).uniq
  end

end
