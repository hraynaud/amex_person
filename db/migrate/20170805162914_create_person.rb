class CreatePerson < ActiveRecord::Migration[5.1]
  def change
    create_table :persons do |t|
      t.string :name
      t.integer :age
      t.date :date_of_birth
      t.string :email
    end
    add_index :persons, :email, unique: true
  end
end
