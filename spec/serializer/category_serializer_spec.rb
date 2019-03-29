require 'rails_helper'

RSpec.describe CategorySerializer do

  let!(:category) { create :category }
  let!(:hash) {  described_class.new(category).serializable_hash }

  validPayloadExample = {
    :data => {
      :id => "2087",
      :type => :category,
      :attributes => {
        :name => "hair"
      },
      :relationships => {
        :products => {
          :data => []
        }
      }
    }
  }

  describe '#serializable_hash' do
    it 'has the root key data' do
      expect(hash.keys). to contain_exactly :data
    end

    it 'has the id, type, attributes, relationships, under data' do
      expect(hash[:data].keys). to contain_exactly :id, :type, :attributes, :relationships
    end

    it 'has name, price_cents, description, named_catgory_paths, price, brand_name under attributes' do
      expect(hash[:data][:attributes].keys).to contain_exactly :name
    end
  end

end
