class GroceriesController < ApplicationController

  def index
    render json: Grocery.all, status: :ok
  end

  def create
    grocery = Grocery.create(params.permit(:user_id, :items))
    render json: grocery, status: :created
  end

  def destroy
    grocery = Grocery.find(params[:id])
    grocery.destroy
    head :no_content
  end

end
