ActiveAdmin.register Product do
  permit_params :name, :description, :price_cents, :photo, :brand_id, category_ids: []

  index do
    selectable_column
    id_column
    column :name
    column :brand
    column :description
    column :price_cents
    column :categories do |p|
      table_for p.categories do
        column do |category|
          category.path.map(&:name).join(" / ")
        end
      end
    end
  end

  show do
    attributes_table do
      row :name
      row :brand
      row :description
      row :price_cents
      row :photo
      table_for product.final_categories do
        column 'Categories' do |category|
          sanitize category.path.map(&:name).map { |name| link_to name, [:admin, category] }.join(" / ")

        end
      end
    end
  end

  form do |f|
    f.inputs 'Add/Edit Product' do
      f.input :name
      f.input :brand
      f.input :price_cents
      f.input :description
      f.input :photo, as: :file
      f.input :categories, as: :select, collection: Category.final_categories
    end
    actions
  end

  controller do
    after_action :touch_products, only: [:update]

    def touch_products
      @product.touch
    end

  end



end
