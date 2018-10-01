class ApplicationController < ActionController::API
  def render_error(obj)
    #obj.errors.full_messages
    render json: { errors: obj.errors.full_messages }, status: 422
  end
end
