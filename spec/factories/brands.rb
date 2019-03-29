FactoryBot.define do
  factory :brand do
    sequence :name do |n|
      "Lorel#{n}"
    end
  end
end
