require 'rails_helper'

RSpec.describe AdminUser, type: :model do
  let (:user) { build :admin_user }

  it 'should be valid' do
    expect(user).to be_valid
  end
  
  it { should validate_presence_of :email }
  it { should validate_uniqueness_of(:email).case_insensitive }
  it { should validate_presence_of :password }
  it { should validate_length_of(:password).is_at_least(8) }
end
