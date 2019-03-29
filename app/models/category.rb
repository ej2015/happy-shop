class Category < ApplicationRecord
  MAX_DEPTH = 2

  has_and_belongs_to_many :products

  has_ancestry orphan_strategy: :destroy, cache_depth: true

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validate :max_depth

  after_commit :invalidate_tree_cache

  scope :final_categories, -> { at_depth(MAX_DEPTH) }

  def childless_categories
    childless = descendants.map { |d| d if d.childless? }.compact
    childless.blank? ? [self] : childless
  end

  def self.tree
    Rails.cache.fetch('categories/tree', expires_in: 1.day) do
      roots.map { |root| root.subtree.arrange_serializable  }.flatten
    end
  end

  private
  def max_depth
    errors.add(:parent, 'cannot have children categories') if depth > MAX_DEPTH
  end

  def invalidate_tree_cache
    Rails.cache.delete('categories/tree')
  end
end
