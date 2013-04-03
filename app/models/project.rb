class Project < ActiveRecord::Base
  attr_accessible :client, :description, :finish_date, :name
  has_many :todos
end
