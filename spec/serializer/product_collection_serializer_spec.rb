require 'rails_helper'

RSpec.describe ProductCollectionSerializer do

  let!(:paginated) { Product.all.page(1) }
  let!(:hash) { described_class.new(serializer: ProductSerializer, paginated: paginated).serializable_hash }

  describe '#serializable_hash' do
    it 'has root key data and meta' do
      expect(hash.keys). to contain_exactly :data, :meta
    end
  end

end
