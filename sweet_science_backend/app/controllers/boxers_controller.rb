class BoxersController < ApplicationController
before_action :find_boxer, only: [:show,:update,:destroy]
def index
    render json: Boxer.all
end

def show
    boxer_id = session[:boxer_id]
    if boxer_id
        boxer = Boxer.find(boxer_id)
        render json: @boxer, status: :created
    else
        render json: { error: "Unauthorized" }, status: :unauthorized
    end
end

def create
    boxer=Boxer.create!(boxer_params) 
    session[:boxer_id] =boxer.id
    render json: boxer, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
    puts "test"
    render json: {errors: invalid.record.errors.full_messages}
end

def update
    @boxer.update!(boxer_params)
    render json: @boxer, status: :accepted
end

def destroy
    render json: @boxer
    header :no_content
end


private
def boxer_params
    params.permit(:name,:weight,:experience,:image,:username,:password,:password_confirmation)
end

def find_boxer
    @boxer= Boxer.find(params[:id])
end

end
