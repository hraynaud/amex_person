class PersonsController < ApplicationController
  def create
    person = Person.create(params.require(:person).permit(:name, :email, :date_of_birth))
    if person.valid?
      head :ok
    else
      render json: {errors: person.errors.messages}, status: 422
    end
  end
end
