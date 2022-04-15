class BoxersController < ApplicationController
before_action :find_boxer, only: [:show,:update,:destroy]
def index
    render json: Boxer.all
end

def show
    render json: @boxer
end

def create
    boxer=Boxer.create!(boxer_params) 
    render json: boxer, status: :created
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
    params.permit(:name,:weight,:experience,:image)
end

def find_boxer
    @boxer= Boxer.find(params[:id])
end

end
