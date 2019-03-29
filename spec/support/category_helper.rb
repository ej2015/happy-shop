module CategoryHelper
  def create_single_branch
    max_depth = Category::MAX_DEPTH
    p = create :category_with_random_name
    (1..max_depth).each do 
      create :category_with_random_name, parent: p.childless_categories.first
    end
    p
  end
end
