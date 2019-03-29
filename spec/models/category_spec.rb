require 'rails_helper'

RSpec.describe Category, type: :model do
  let (:category) { build :category }
    let(:memory_store) { ActiveSupport::Cache.lookup_store(:memory_store) } 
  let(:cache) { Rails.cache }

  it 'should be valid' do
    expect(category).to be_valid
  end

  it { should validate_presence_of :name }

  it {
    create(:category)
    should validate_uniqueness_of(:name).case_insensitive 
  }

  describe '.final_categories' do
    it 'only returns categories at max_depth' do
      p = create :category_with_whole_branch 
      expect(described_class.final_categories).to contain_exactly p.children.first.children[0]
    end
  end

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

  describe '.tree' do
  before do
    allow(Rails).to receive(:cache).and_return(memory_store)
    Rails.cache.clear
    @c1 = create :category_with_whole_branch
    @c2 = create :category_with_whole_branch
  end

    it 'returns all categories as an array of trees' do
      expect(described_class.tree.count).to eq 2
      expect(described_class.tree.first['children'][0]['children'][0]['children'].length).to eq 0
    end

    it 'caches' do
      described_class.tree 
      expect(cache.instance_variable_get(:@data).keys[0]).to eq 'categories/tree'
    end

    it 'is invalidated when any category is updated' do
      described_class.tree
      @c1.update(name: 'cool')
      expect(described_class.tree.map { |b| b['name'] }).to include 'cool'
    end

    it 'is invalidated when any category is deleted' do
      described_class.tree
      @c1.destroy
      expect(described_class.tree.count).to eq 1
    end

    it 'is invalidated when any category is created' do
      described_class.tree
      expect(described_class.tree.count).to eq 2
      create :category
      expect(described_class.tree.count).to eq 3
    end 
  end
end
