rkaclass CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :client
      t.text :description
      t.date :finish_date

      t.timestamps
    end
  end
end
