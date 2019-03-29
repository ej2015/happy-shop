require 'rails_helper'

RSpec.describe Brand, type: :model do
  let (:brand) { build :brand }

  it 'should be valid' do
    expect(brand).to be_valid
  end
  
  it { should validate_presence_of :name }
  it { 
    create :brand
    should validate_uniqueness_of(:name).case_insensitive
  }

  it 'touches associated products after change' do
    product = create :product
    brand.products << product
    brand.save
    updated_at = product.updated_at
    sleep(0.01)
    brand.update(name: 'new name')
    expect(product.updated_at).to_not eq updated_at
  end
  
end
