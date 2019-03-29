# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

makeup = Category.create name: 'makeup'

face = makeup.children.create name: 'face'
contour = face.children.create name: 'contour'
powder = face.children.create name: 'powder'

eye = makeup.children.create name: 'eye'
eyeliner = eye.children.create name: 'eyeliner'

skin_care = Category.create name: 'skin care'

=begin
name = { makeup: 1,
                 face: 101, eye: 102, lip: 103,
                   contour: 10101, powder: 10102,
                   eyeliner: 10201, eyeshadow: 10202,
               skin_care: 2,
                 mask_treatment: 201, moisturiser: 202,
                   mask: 20101, peel: 20102,
                   day_moisturiser: 20201, night_cream: 20202,
               hair: 3,
                 styling: 301,
                   heat_protection: 30101, hair_spray: 30102,
               man: 4,
                 man_skin_care: 401,
                   man_clenser: 40101, man_expoliator: 40102
  }
=end
