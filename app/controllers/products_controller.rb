class ProductsController < ApiController
  before_action :set_product, only: [:show]

  # GET /products
  def index
    paginated = ProductPaginator.new(request).call
    render json: ProductCollectionSerializer.new(serializer: ProductSerializer, paginated: paginated).serializable_hash
  end

  # GET /products/1
  def show
    render json: ProductSerializer.new(@product).serializable_hash
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name, :description, :price_cents)
    end

end
