require 'rails_helper'

RSpec.describe ProductPaginator do

  before(:each) do
    @brand = create :brand
    @category_1 = create :category_with_whole_branch
    @category_2 = create :category_with_whole_branch
    @product_a = create :product, name: 'a', price_cents: 2, brand: @brand, categories: @category_1.subtree
    @product_b = create :product, name: 'b', price_cents: 3, brand: @brand, categories: @category_1.subtree
    @product_c = create :product, name: 'c', price_cents: 12, brand: @brand, categories: @category_1.subtree
    @product_d = create :product, name: 'd', price_cents: 3, brand: @brand, categories: @category_2.subtree
    @request = double
    @params = { page: '1', per: '2', prices: ['0-5', '10-15'], category: @category_1.id.to_s }
    allow(@request).to receive(:params).and_return(@params)
  end
  
  describe '#call' do
    it 'returns right products' do
      res = described_class.new(@request).call
      expect(res). to contain_exactly @product_a, @product_b
    end

    it 'does not return products from a different category' do
      @params[:category] = @category_2.id.to_s
      expect(described_class.new(@request).call). to contain_exactly @product_d
    end

    it 'defaults to the first category from db' do
      @params.delete(:category)
      expect(described_class.new(@request).call). to contain_exactly @product_a, @product_b
    end

  end

end
