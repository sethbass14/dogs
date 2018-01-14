class Api::V1::DogsController < ApplicationController
  before_action :set_dog, only: [:destroy]


  def index
    @dogs = Dog.all
    render json: @dogs, status: 200
  end

  def create
    dog = Dog.new(dog_params)
    if dog.save
      render json: dog, status: 201
    else
      render json: {message: "Error with your data!", status:400}
    end
  end

  def destroy
    @dog.destroy
    render json: {message: "You destroyed the dog!", id: @dog.id}
  end

  private

  def dog_params
    params.permit(:breed, :image)
  end

  def set_dog
    @dog = Dog.find(params[:id])
  end
end
