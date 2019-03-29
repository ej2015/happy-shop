require 'rails_helper'

RSpec.describe Category, type: :model do
  let (:category) { build :category }

  it 'should be valid' do
    expect(category).to be_valid
  end

  it { should validate_presence_of :name }

  it {
    create(:category)
    should validate_uniqueness_of(:name).case_insensitive 
  }

  describe '#max_depth' do
    it 'validates max depth' do
      p = create :category_with_whole_branch 
      c = build :category_with_random_name, parent: p.childless_categories.first
      expect(c.valid?).to be false
      c.save
      expect(c.errors.full_messages.join("; ")).to match(/cannot have children/)
    end
  end  

  describe '#childless_categories' do
    context 'only root node' do
      it 'returns self' do
        category.save
        expect(category.childless_categories).to contain_exactly category
      end
    end

    context 'one branch' do
      it 'returns nodes without children' do
        p = create :category_with_whole_branch
        expect(p.childless_categories).to contain_exactly p.descendants.last
      end
    end

    context 'multiple branches' do
      it 'returns self' do
        p = create :category_with_whole_branch 
        c1 = p.descendants.last
        c2 = create :category_with_random_name, parent: p
        expect(p.childless_categories).to contain_exactly c1, c2
      end
    end
  end
    
  
end
