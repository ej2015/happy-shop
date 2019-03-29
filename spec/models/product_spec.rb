require 'rails_helper'

RSpec.describe Product, type: :model do
  let (:product) { build :product }
  let (:category) { create :category }
  let(:memory_store) { ActiveSupport::Cache.lookup_store(:memory_store) } 
  let(:cache) { Rails.cache }

  before do
    allow(Rails).to receive(:cache).and_return(memory_store)
    Rails.cache.clear
  end

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

  describe '#named_category_paths' do
    before do
      @cat1 = create :category_with_whole_branch
      @cat2 = create :category_with_whole_branch
      @p = create :product, name: 'a', categories: Category.all
    end

    it 'generates names from root to leaf' do
      expect(@p.named_category_paths).to contain_exactly [@cat1.name, @cat1.children[0].name, @cat1.children[0].children[0].name],  [@cat2.name, @cat2.children[0].name, @cat2.children[0].children[0].name]
    end

    it 'caches' do
      @p.named_category_paths
      expect(cache.instance_variable_get(:@data).keys[0]).to match /products\/[\d-]+\/named_category_paths/
    end
  end

  describe '#brand_name' do
    it 'regurns its brand name' do
      product.brand = build(:brand, name: 'xxx')
      expect(product.brand_name).to eq 'xxx'
    end

    it 'caches' do
      product.brand_name
      product.brand = build(:brand, name: 'xxx')
      expect(product.brand_name).to_not eq 'xxx'
    end
  end 
end
