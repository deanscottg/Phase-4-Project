class BoxersController < ApplicationController
before_action :find_boxer, only: [:update,:destroy]

def index
    render json: Boxer.all
end

def create
    boxer=Boxer.create!(boxer_params) 
    session[:boxer_id] =boxer.id
    render json: boxer, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
    render json: {errors: invalid.record.errors.full_messages}
end
def show
    boxer = Boxer.find_by(id: session[:boxer_id])
    if boxer
    render json: boxer
    else
    render json: { error: "Not authorized" }, status: :unauthorized
    end
end

def update
    boxer = Boxer.find(params[:id])
    if boxer
    boxer.update(experience: params[:experience])
    render json: @boxer, status: :accepted
    end
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
        Boxer.find(params[:id])
    end

end
