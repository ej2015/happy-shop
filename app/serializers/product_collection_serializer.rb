class ProductCollectionSerializer
  def initialize(serializer:, paginated:)
    @serializer = serializer
    @paginated = paginated
    @options = {}
  end

  def serializable_hash 
    @serializer.new(paginated, options).serializable_hash
  end

  private
  attr_reader :paginated

  def options
    { meta:
      { total: paginated.total_pages },
      params:
      { display: Product::PHOTO_SIZE }
    }
  end

end
