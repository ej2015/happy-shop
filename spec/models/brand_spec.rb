require 'rails_helper'

RSpec.describe Brand, type: :model do
  let (:product) { build :product }

  it 'should be valid' do
    expect(product).to be_valid
  end
  
  it { should validate_presence_of :name }
  it { 
    create :product
    should validate_uniqueness_of(:name).case_insensitive
  }
end
