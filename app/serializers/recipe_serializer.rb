class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :link, :date, :favorite, :status, :cuisine, :user_id
end
