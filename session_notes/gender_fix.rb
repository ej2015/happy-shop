
# user model
# users table
# gender

User.where("gender REGEXP ?", 'G|M').each |u|
    u.update_columns(gender: u.gender.downcase)
end
