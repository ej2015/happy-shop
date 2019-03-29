module ValidUserHelper
  def sign_in(user)
    post admin_user_session_path, params: { admin_user: { email: user.email, password: user.password } }
  end

end
