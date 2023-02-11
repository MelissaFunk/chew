class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :link
      t.string :image
      t.string :date
      t.boolean :favorite
      t.string :status
      t.string :cuisine
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
