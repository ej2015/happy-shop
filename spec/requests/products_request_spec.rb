require 'rails_helper'

RSpec.describe 'products', type: :request do
  let(:product) { create :product }

  describe 'GET index' do
    before do
      @res = { data: 'success' }
      @paginated = double
      @paginator = instance_double('ProductPaginator')
      allow(ProductPaginator).to receive(:new).with(an_instance_of(ActionDispatch::Request)).and_return(@paginator)
      allow(@paginator).to receive(:call).and_return(@paginated)
      @serializer = instance_double('ProductCollectionSerializer')
      allow(ProductCollectionSerializer).to receive(:new).with(serializer: ProductSerializer, paginated: @paginated).and_return(@serializer)
      allow(@serializer).to receive(:serializable_hash).and_return(@res)
    end

    it 'returns http success' do
      get products_path 
      expect(response).to have_http_status :success
    end

    it 'returns the payload' do
      get products_path
      expect(response.body).to include @res.to_json
    end
  end

  describe 'GET show' do
    before do
      @res = { data: 'success' }
      @serializer = instance_double('ProductSerializer')
      allow(ProductSerializer).to receive(:new).with(product).and_return(@serializer)
      allow(@serializer).to receive(:serializable_hash).and_return(@res)
    end
    it 'returns http success' do
      get product_path(product) 
      expect(response).to have_http_status :success
    end

    it 'assigns the categories' do
      get product_path(product)
      expect(response.body).to include @res.to_json
    end
  end 
end
