class CreateDrills < ActiveRecord::Migration[7.0]
  def change
    create_table :drills do |t|
      t.string :name
      t.integer :rounds
      t.string :improves

      t.timestamps
    end
  end
end

