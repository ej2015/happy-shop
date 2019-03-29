class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price_cents, :description, :named_category_paths, :brand_name 
  link :public_url
  attributes :photo do |obj, params|
    if obj.photo.attached?
      photo = params.key?(:display) ? obj.photo.variant(resize: params[:display]) : obj.photo
      Rails.application.routes.url_helpers.url_for(photo)
    end
  end

  belongs_to :brand

end
