require 'rails_helper'

RSpec.describe CategoryCollectionSerializer do

  let!(:category) { create :category_with_whole_branch }
  let!(:hash) { described_class.new.serializable_hash }

  describe '#serializable_hash' do
    it 'has root key data ' do
      expect(hash.keys). to contain_exactly :data
    end
  end

end
