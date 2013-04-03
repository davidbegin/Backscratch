class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :content
      t.integer :project_id
      t.timestamps
    end
  end
end
