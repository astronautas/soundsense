class TracksController < ApplicationController
  def index
    tracks = Track.all
    render json: tracks
  end

  def show
  end
end
