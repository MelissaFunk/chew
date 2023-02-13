class CreateGroceries < ActiveRecord::Migration[7.0]
  def change
    create_table :groceries do |t|
      t.string :items
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
