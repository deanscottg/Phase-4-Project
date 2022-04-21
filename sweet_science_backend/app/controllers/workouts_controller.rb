class WorkoutsController < ApplicationController
    def index
        render json: Workout.all
    end

    def create
        workout= Workout.create!(workout_params) 
        session[:workout_id] = workout.id
        render json: workout, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}
    end
        
    end

    private 
    def workout_params
        params.permit(:boxer_id,:date,:drill_id,:completion_level)
    end
end
