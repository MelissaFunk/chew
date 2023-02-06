class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :date, :favorite, :status, :cuisine, :user_id
end
