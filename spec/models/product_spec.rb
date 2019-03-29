require 'rails_helper'

RSpec.describe Product, type: :model do
  let (:product) { build :product }
  let (:category) { create :category }

  it 'should be valid' do
    expect(product).to be_valid
  end

  it { should validate_presence_of :name }
  it { should validate_presence_of :description }
  it { should validate_presence_of :price_cents }
  it { should validate_length_of(:description).is_at_least(50).is_at_most(500) }

  describe '#category_path' do
    it 'returns array of categories from root to self' do
      root = create :category_with_whole_branch
      final_node = root.descendants.last
      product.categories << final_node
      product.save
      expect(product.category_paths.count).to eq 1
      expect(product.category_paths[0].map(&:name)).to eq [root.name] + root.descendants.map(&:name)
    end
  end

  describe '#by_prices' do
    before do
      @p1 = create :product, name: 'a', price_cents: 4
      @p2 = create :product, name: 'b', price_cents: 10
    end

    it 'returns the product within price range' do
      expect(described_class.by_prices([0..5, 15..20])).to contain_exactly @p1 
    end

    it 'includes boundary values' do
      expect(described_class.by_prices([10..15])).to contain_exactly @p2
    end
  end

  
end
