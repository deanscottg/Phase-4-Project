class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
include ActionController::Cookies
# before_action :authorized, 

# def authorized
#     return render json:{error: "Not Authorized"}, status: :unauthorized, unless session.include? :boxer_id
# end
# skip_forgery_protection

private
    def render_not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found

    end
    def render_unprocessable_entity_response(exception)
    render json: {errors:exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end

