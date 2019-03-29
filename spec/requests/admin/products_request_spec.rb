require 'rails_helper'

RSpec.describe 'admin products', type: :request do
  let(:user) { create :admin_user }
  let(:product) { create :product }
  let(:category) { create :category_with_whole_branch }
  !let(:brand) { create :brand, name: 'new name' }
  before { sign_in user }

  !let(:valid_attributes) {
    {
      name: 'great product',
      price_cents: 10000,
      description: 'a'*60,
      category_ids: [],
      brand_id: brand.id
    }
  }

  describe 'GET index' do
    it 'returns http success' do
      get admin_products_path 
      expect(response).to have_http_status :success
    end

    it 'assigns the products' do
      product
      get admin_products_path
      expect(assigns(:products)).to include product
    end

    it "should render the expected columns" do
      category
      leaf = Category.final_categories.first
      product.categories << leaf
      product.save
      get admin_products_path
      expect(response.body).to include(product.name)
      expect(response.body).to include(product.price_cents.to_s)
      expect(response.body).to include(product.categories.first.name)
    end
  end

  describe 'GET edit' do
    it 'returns http success' do
      get admin_product_path(product)
      expect(response).to have_http_status :success
    end

    it 'renders the expected columns' do
      category
      leaf = Category.final_categories.first
      product.categories << leaf
      product.save
      get admin_product_path(product)
      expect(response.body).to include(product.name)
      expect(response.body).to include(product.price_cents.to_s)
      expect(response.body).to include(product.categories.first.name)
    end
  end

  describe 'POST' do
    context 'with valid params, no category' do
      it 'creates a new product' do
        post admin_products_path, params: { product: valid_attributes }
        expect(response).to redirect_to(admin_product_path(assigns(:product)))
        follow_redirect!
        expect(response.body).to include(assigns(:product).name)
      end
    end

    context 'with valid params, with category' do
      it 'creates a new product' do
        category
        leaf = Category.final_categories.first
        valid_attributes[:category_ids] = [leaf.id]
        post admin_products_path, params: { product: valid_attributes }
        expect(response).to redirect_to(admin_product_path(assigns(:product)))
        follow_redirect!
        expect(response.body).to include(leaf.name)
      end
    end
  end

  describe 'PATCH' do
    context 'change name' do
      it 'changes the name' do
        product
        patch admin_product_path(product), params: { product: { name: 'new_name' } }
        expect(response).to redirect_to(admin_product_path(product))
        follow_redirect!
        expect(response.body).to include('new_name')
      end
    end

    context 'change category' do
      before :each do 
        category
        @leaf = Category.final_categories.first
        product.categories << @leaf
        product.save
      end

      it 'can remove a category' do
        patch admin_product_path(product), params: { product: valid_attributes }
        expect(response).to redirect_to(admin_product_path(product))
        follow_redirect!
        expect(response.body).to_not include(@leaf.name)
      end

      it 'can add a category' do
        another_category = create :category_with_whole_branch
        another_leaf = another_category.descendants.final_categories.first
        valid_attributes[:category_ids] = [another_leaf.id]
        patch admin_product_path(product), params: { product: valid_attributes }
        expect(response).to redirect_to(admin_product_path(product))
        follow_redirect!
        expect(response.body).to_not include(@leaf.name)
        expect(response.body).to include(another_leaf.name)
      end
    end

  end
end
