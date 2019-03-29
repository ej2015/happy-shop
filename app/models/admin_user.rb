class AdminUser < ApplicationRecord
  devise :database_authenticatable, 
         :recoverable, :rememberable, :validatable
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format:{ with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates :password, presence: true, length: { minimum: 8 }  #active_admin form defaults to require password for both update and create
  before_validation :downcase_email

  private
  def downcase_email
    self.email = email.downcase if email.present?
  end
end
