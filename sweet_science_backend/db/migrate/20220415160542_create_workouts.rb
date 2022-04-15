class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :date
      t.belongs_to :boxer, null: false, foreign_key: true
      t.references :drill
      t.integer :completion_level

      t.timestamps
    end
  end
end
