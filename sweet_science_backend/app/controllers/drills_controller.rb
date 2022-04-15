class DrillsController < ApplicationController
    def index
        render json: Drill.all
    end
end
