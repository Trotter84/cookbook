class Ingredient < ApplicationRecord
  before_save :normalize_name
  #Salt salt SAlt SaLt
  validates_uniqueness_of :name, case_sensitive: false

  has_many :recipe_ingredients, dependent: :destroy
  has_many :recipes, through: :recipe_ingredients

  def normalize_name
    #capitalize first letter of every word
  end
end
