class BoxerSerializer < ActiveModel::Serializer
  attributes :id,:name,:weight,:experience,:image,:username
  has_many :workouts
end
