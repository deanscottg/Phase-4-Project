class UpdateDateColumn < ActiveRecord::Migration[7.0]
  def change
    change_column :workouts, :date, :string
  end
end
