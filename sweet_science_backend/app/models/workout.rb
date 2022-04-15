class Workout < ApplicationRecord
 has_many :drills
 belongs_to :boxer
 validates :completion_level, inclusion: 1..5 
end
