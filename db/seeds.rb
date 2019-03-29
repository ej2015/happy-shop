#admin
AdminUser.create!(email: 'admin@example.com', password: 'pa$$word$', password_confirmation: 'pa$$word$')

#category
makeup = Category.create name: 'makeup'

face = makeup.children.create name: 'face'
contour = face.children.create name: 'contour'
powder = face.children.create name: 'powder'

eye = makeup.children.create name: 'eye'
eyeliner = eye.children.create name: 'eyeliner'
eyeshadow = eyeliner.children.create name: 'eyeshadow'

skin_care = Category.create name: 'skin care'
mask_treatment = skin_care.children.create name: 'masks & treatments'
mask = mask_treatment.children.create name: 'mask'
peel = mask_treatment.children.create name: 'peel'

#brand
loreal = Brand.create name: 'loreal'
channel = Brand.create name: 'channel'
fresh = Brand.create name: 'fresh'

#product

description = 'Sugar Lip Treatment Advanced Therapy is an ultra-nourishing lip treatment proven to significantly boost moisture, enhance volume, and improve the definition of the lip area.'

11.times do
  Category.final_categories.each do |category|
    Product.create(name: FFaker::Product.brand, brand: Brand.find(rand 1..3), price_cents: rand(100..10000), categories: [category], description: description)
  end
end

Product.all.each do |p|
  p.photo.attach(io: File.open(Rails.root.join('db', 'seed_attachments', 'shampoo.jpeg')), filename: 'shampoo.jpeg', content_type: 'image/jpeg')
end
