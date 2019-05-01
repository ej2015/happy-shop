class ProductCollectionSerializer
  def initialize(paginated:)
    @serializer = ProductSerializer
    @paginated = paginated
    @options = {}
  end

  def serializable_hash 
    serializer.new(paginated, options).serializable_hash
  end

  private
  attr_reader :paginated, :serializer

  def options
    { meta:
      { total: paginated.total_pages },
      params:
      { display: Product::PHOTO_SIZE }
    }
  end

end
