class Api::RecipeIngredientsController < ApplicationController

  def new
    #[{ name: 'Salt', id: 1 }, { name: 'Pepper', id: 2 }]
    ingredients = Ingredient.all.map { |i| { name: i.name, id: i.id } }
    render json: ingredients
  end

  def create
    recipe_ingredient = RecipeIngredient.new(recipe_ingredient_params)

    if recipe_ingredient.save
      render json: recipe_ingredient
    else
      render_error(recipe_ingredient)
    end
  end

  def destroy
    RecipeIngredient.find(params[:id]).destroy
  end

  private
    def recipe_ingredient_params
      params.require(:recipe_ingredient)
        .permit(:recipe_id, :ingredient_id, :amount)
    end
end
