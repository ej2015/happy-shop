class AddIndexToProductPrice < ActiveRecord::Migration[5.2]
  def change
    add_index :products, :price_cents
  end
end
