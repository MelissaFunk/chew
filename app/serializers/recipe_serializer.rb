class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :link, :date, :favorite, :status, :cuisine, :user_id
end
