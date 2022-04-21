class SessionsController < ApplicationController
    def create
        boxer = Boxer.find_by(username: params[:username])
        if boxer&.authenticate(params[:password]) 
            puts boxer.id
            session[:boxer_id]=boxer.id
            render json: boxer, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        puts session.inspect.to_s
        if session.include? :boxer_id
            session.delete :boxer_id 
            head :no_content
        else
            puts "test"
            render json: { errors:["Unauthorized"] },status: :unauthorized
        end
    end
end


