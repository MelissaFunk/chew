class RecipesController < ApplicationController

  def index
    render json: Recipe.all, status: :ok
  end
 
  def create
    recipe = Recipe.create(recipe_params)
    render json: recipe, status: :created
  end
 
  def update
    recipe = Recipe.find(params[:id])
    recipe.update(recipe_params)
    render json: recipe, status: :accepted
  end

  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    head :no_content
  end

  private

  def recipe_params
    params.permit(:name, :image, :link, :date, :favorite, :status, :cuisine, :user_id)
  end

end
