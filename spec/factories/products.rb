FactoryBot.define do
  factory :product do
    name { "xx shampoo" }
    description { "x"*50 }
    price_cents { 10000 }
    brand
  end
end
