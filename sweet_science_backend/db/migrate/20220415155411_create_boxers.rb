class CreateBoxers < ActiveRecord::Migration[7.0]
  def change
    create_table :boxers do |t|
      t.string :name
      t.integer :weight
      t.integer :experience
      t.string :image

      t.timestamps
    end
  end
end
