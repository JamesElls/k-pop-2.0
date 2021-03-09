class CreateBands < ActiveRecord::Migration[6.1]
  def change
    create_table :bands do |t|
      t.string :name
      t.string :description
      t.integer :sales

      t.timestamps
    end
  end
end
