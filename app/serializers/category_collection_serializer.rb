class CategoryCollectionSerializer
  def initialize(serializer: nil, paginated: nil)
    @paginated = paginated
  end

  def serializable_hash 
    { data: paginated }
  end

  private
  attr_reader :paginated
end
