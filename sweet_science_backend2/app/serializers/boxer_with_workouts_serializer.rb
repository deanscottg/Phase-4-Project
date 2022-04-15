class BoxerWithWorkoutsSerializer < ActiveModel::Serializer
  attributes :id,:name,:weight,:experience,:image
  has_many :workouts
end
