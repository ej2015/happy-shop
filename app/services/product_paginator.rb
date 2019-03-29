class ProductPaginator
  def initialize(request)
    params = request.params
    @sort = params[:sort] || 'price_cents'
    @page = params[:page] || 1
    @per = params[:per] || Product::PER_PAGE
    @prices = prices(params[:prices])
    @category = category(params[:category])
  end

  def call
    @category.products.by_prices(@prices).order(@sort).with_attached_photo.page(@page).per(@per)
  end

  private

  def category(id)
     Category.find_by_id(id) || default_category
  end

  def default_category
    Category.first
  end

  def prices(prices)
    prices ||= []
    prices.map do |price|
      Range.new(*price.split('-').map(&:to_i))
    end
  end
end
