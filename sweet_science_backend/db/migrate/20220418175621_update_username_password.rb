class UpdateUsernamePassword < ActiveRecord::Migration[7.0]
  def change
    add_column :boxers, :username, :string
  end
  def change
    add_column :boxers, :password_digest, :string
  end
end
