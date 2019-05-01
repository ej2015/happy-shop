class CreatePrices < ActiveRecord::Migration[5.2]
  def change
    create_table :prices do |t|
      t.integer :price_cents, null: false
      t.integer :discounted_price

      t.timestamps
    end
  end
end
