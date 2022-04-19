class Boxer < ApplicationRecord
    has_many :workouts, dependent: :destroy
    validates :experience, inclusion:1..5
    validates :name, presence:true
    validates :weight, numericality:true
    validates :username, presence:true, uniqueness:true
    
    has_secure_password
end
