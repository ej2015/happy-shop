class AddBrandReferenceToProduct < ActiveRecord::Migration[5.2]
  def change
    add_reference :products, :brand, index: true, foreign_key: true
  end
end
