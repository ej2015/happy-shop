require 'rails_helper'

RSpec.describe 'admin user', type: :request do
  let(:user) { create :admin_user }
  before { sign_in user }

  let(:valid_attributes) {
    {
      email: 'new@email.com',
      password: '12345678',
      password_confirmation: '12345678'
    }
  }

  let(:invalid_attributes) {
    {
      email: 'new@email.com',
      password: '1234',
      password_confirmation: '1234'
    }
  }

  describe 'GET index' do
    it 'returns http success' do
      get admin_admin_users_path 
      expect(response).to have_http_status :success
    end

    it 'assigns user' do
      user
      get admin_admin_users_path
      expect(assigns(:admin_users)).to include user
    end

    it "should render the expected columns" do
      get admin_admin_users_path
      expect(response.body).to include(user.email)
    end
  end

  describe 'GET edit' do
    it 'returns http success' do
      get admin_admin_user_path(user)
      expect(response).to have_http_status :success
    end

    it 'renders the expected columns' do
      get admin_admin_user_path(user)
      expect(response.body).to include(user.email)
    end
  end

  describe 'POST' do
    context 'with valid params' do
      it 'creates a new user' do
        post admin_admin_users_path, params: { admin_user: valid_attributes }
        expect(response).to redirect_to(admin_admin_user_path(assigns(:admin_user)))
        follow_redirect!
        expect(response.body).to include(assigns(:admin_user).email)
      end
    end

    context 'with invalid params' do
      it 'renders new with error message' do
        post admin_admin_users_path, params: { admin_user: invalid_attributes }
        expect(response).to render_template(:new)
        expect(response.body).to include('is too short')
      end
    end

  end

  describe 'PATCH' do
    let(:valid_update_attributes) {
      {
        password: '123456789',
        password_confirmation: '123456789'
      }
    }

    let(:invalid_update_attributes) {
      {
        password: '1234',
        password_confirmation: '1234'
      }
    }

    context 'with valid params' do
      it 'renders edit with error message' do
        patch admin_admin_user_path(user), params: { admin_user: invalid_update_attributes }
        expect(response).to render_template(:edit)
        expect(response.body).to include('is too short')
      end
    end

  end
end
