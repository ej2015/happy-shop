FactoryBot.define do
  factory :category do
    name { "hair" }

    trait :with_random_name do
      sequence :name do |n|
        "hair#{n}"
      end
    end

    factory :category_with_random_name, traits: [:with_random_name]

    trait :with_whole_branch do
      after(:create) { |root|
        max_depth = Category::MAX_DEPTH
        (1..max_depth).each do 
          create :category_with_random_name, parent: root.childless_categories.first
        end
      }
    end 

    factory :category_with_whole_branch, traits: [:with_random_name, :with_whole_branch]

  end
end
