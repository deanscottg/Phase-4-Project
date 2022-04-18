class UpdateUsernamesPassword < ActiveRecord::Migration[7.0]
  def change
    add_column :boxers, :username, :string
  end
end
