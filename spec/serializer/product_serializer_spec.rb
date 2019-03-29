require 'rails_helper'

RSpec.describe ProductSerializer do

  let!(:brand) { create :brand }
  let!(:category) { create :category_with_whole_branch }
  let!(:product) { build :product, brand: brand }
  let!(:hash) {
    product.categories = Category.all
    product.save
    product.photo.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'images', 'shampoo.jpg')), filename: 'shampoo.jpg', content_type: 'image/jpg')
    described_class.new(product).serializable_hash
  }

  validPayloadExample = {
    :data => {
      :id => "568",
      :type => :product,
      :attributes => {
        :name => "xx shampoo",
        :price_cents => 10000,
        :description => "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        :named_category_paths => [
          [
            "hair1",
            "hair2",
            "hair3"
          ]
        ],
        :brand_name => "MyString",
        :photo => "http://localhost:3001/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3ab52e47aa2832af9049057790768b383be17f9a/shampoo.jpg"
      },
      :relationships => {
        :brand => {
          :data => {
            :id => "662",
            :type => :brand
          }
        }
      },
      :links => {
        :public_url => "http://localhost:3001/api/products/568"
      }
    }
  }

  describe '#serializable_hash' do
    it 'has the root key data' do
      expect(hash.keys). to contain_exactly :data
    end

    it 'has the id, type, attributes, relationships, links under data' do
      expect(hash[:data].keys). to contain_exactly :id, :type, :attributes, :relationships, :links
    end

    it 'has name, price_cents, description, named_catgory_paths, price, brand_name under attributes' do
      expect(hash[:data][:attributes].keys).to contain_exactly :name, :price_cents, :description, :named_category_paths, :photo, :brand_name
    end
  end

end
