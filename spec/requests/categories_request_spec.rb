require 'rails_helper'

RSpec.describe 'categories', type: :request do
  let(:category) { create :category }

  describe 'GET index' do
    before do
      @res = { data: 'success' }
      @serializer = instance_double('CategoryCollectionSerializer')
      allow(CategoryCollectionSerializer).to receive(:new).and_return(@serializer)
      allow(@serializer).to receive(:serializable_hash).and_return(@res)
    end

    it 'returns http success' do
      get categories_path 
      expect(response).to have_http_status :success
    end

    it 'returns the payload' do
      get categories_path
      expect(response.body).to include @res.to_json
    end
  end
  
  describe 'GET show' do
    before do
      @res = { data: 'success' }
      @serializer = instance_double('CategorySerializer')
      allow(CategorySerializer).to receive(:new).with(category).and_return(@serializer)
      allow(@serializer).to receive(:serializable_hash).and_return(@res)
    end
    it 'returns http success' do
      get category_path(category) 
      expect(response).to have_http_status :success
    end

    it 'assigns the categories' do
      get category_path(category)
      expect(response.body).to include @res.to_json
    end
  end
end
