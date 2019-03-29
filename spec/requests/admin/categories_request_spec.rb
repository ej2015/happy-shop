require 'rails_helper'

RSpec.describe 'admin categories', type: :request do
  let(:user) { create :admin_user }
  let(:category) { create :category, name: 'hair' }
  before { sign_in user }

  let(:valid_attributes) {
    {
      name: 'face',
      parent: ''
    }
  }

  describe 'GET index' do
    it 'returns http success' do
      get admin_categories_path 
      expect(response).to have_http_status :success
    end

    it 'assigns the categories' do
      category
      get admin_categories_path
      expect(assigns(:categories)).to include category
    end
  end

  describe 'GET edit' do
    it 'returns http success' do
      get admin_category_path(category)
      expect(response).to have_http_status :success
    end
  end

  describe 'POST' do
    context 'with valid params, no parent' do
      it 'creates a new category' do
        post admin_categories_path, params: { category: valid_attributes }
        expect(response).to redirect_to(admin_category_path(assigns(:category)))
        follow_redirect!
        expect(response.body).to include(assigns(:category).name)
      end
    end

    context 'with valid params, with parent' do
      it 'creates a new category' do
        parent_category = create :category, name: 'parent category'
        valid_attributes[:parent] = parent_category.id
        post admin_categories_path, params: { category: valid_attributes }
        expect(response).to redirect_to(admin_category_path(assigns(:category)))
        follow_redirect!
        expect(response.body).to include(parent_category.id.to_s)
      end
    end
  end

  describe 'PATCH' do
    let(:valid_update_attributes) {
      {
        name: 'neck',
        parent: ''
      }
    }

    let(:invalid_update_attributes) {
      {
        name: 'hair',
        parent: ''
      }
    }

    context 'with valid params' do
      it 'updates a category' do
        category
        patch admin_category_path(category), params: { category: valid_update_attributes }
        expect(response).to redirect_to(admin_category_path(assigns(:category)))
        follow_redirect!
        expect(response.body).to include('neck')
      end
    end

    context 'with invalid params' do
      it 'does not update a category' do
        category
        another_category = create :category, name: 'face'
        patch admin_category_path(another_category), params: { category: invalid_update_attributes }
        expect(response).to render_template(:edit)
        expect(response.body).to include('already been taken')
      end
    end

  end
end
