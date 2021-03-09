class Api::BandsController < ApplicationController
    def index 
      render json: Band.all
    end
    
    def create 
      band = Band.new (band_params)
      if band.save
          render json: band
      else 
        render json: {errors: band.errors}, status: :unprocessable_entity 
      end 
    end
    
    def update 
      band = Band.find(params[:id])
      if band.update(band_params)
        render json: band
      else 
        render json: {errors: band.errors}, status: :unprocessable_entity 
      end
    end
    
    def destroy 
      band = Band.find(params[:id]).destroy
      render json: band
    end
    
    private
    
    def band_params
      params.require(:band).permit(:name, :description, :sales)
      end 
    end
