ActiveAdmin.register Category do
  permit_params :name, :parent

  form do |f|
    f.inputs 'Details' do
      f.input :name
      f.input :parent, as: :select, collection: Category.all, selected: object.parent_id
    end
    f.actions
  end

  controller do
    def create
      @category = Category.new(category_params)
      if @category.save
        redirect_to admin_category_path(@category)
      else
        render :new
      end
    end

    def update
      @category = Category.find(params[:id])
      if @category.update(category_params)
        redirect_to admin_category_path(@category)
      else
        render :edit
      end
    end

    def category_params
      parent = Category.where(id: permitted_params[:category][:parent]).first
      permitted_params[:category].merge({parent: parent})
    end
  end

end
