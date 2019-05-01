class AddPriceReferenceToProduct < ActiveRecord::Migration[5.2]
  def change
    add_reference :products, :prices, index: true, foreign_key: true
  end
end
