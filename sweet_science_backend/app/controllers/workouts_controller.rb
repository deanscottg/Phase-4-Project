class WorkoutsController < ApplicationController
    def index
        render json: Workout.all
    end

    def create
        workout = Workout.create!(workout_params)
        render json: workout, status: :created
    end

    private 
    def workout_params
        params.permit(:boxer_id,:date,:drill_id,:completion_level)
    end
end
