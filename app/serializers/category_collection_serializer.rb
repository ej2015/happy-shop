class CategoryCollectionSerializer
  def initialize(serializer: nil, paginated: nil)
    @paginated = paginated || Category.tree
  end

  def serializable_hash 
    { data: @paginated }
  end

end
