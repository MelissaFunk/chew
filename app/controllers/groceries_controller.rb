class GroceriesController < ApplicationController

  def index
    render json: Grocery.all, status: :ok
  end

  def create
    grocery = Grocery.create(params.permit(:user_id, :items))
    render json: grocery, status: :created
  end

  def update
    grocery = Grocery.find(params[:id])
    grocery.update(params.permit(:items))
    render json: grocery, status: :accepted
  end

end
