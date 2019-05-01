class CategoriesController < ApiController
  before_action :set_category, only: [:show]

  # GET /categories
  def index
    paginated = Category.tree
    render json: CategoryCollectionSerializer.new(paginated: paginated).serializable_hash
  end

  # GET /categories/1
  def show
    render json: CategorySerializer.new(@category).serializable_hash 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:name, :description, :price_cents)
    end
end
