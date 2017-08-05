class PersonsController < ApplicationController

  def create
    person = Person.create(params.require(:person).permit(:name, :email, :date_of_birth))
    if person.valid?
      head :ok
    else
      render json: {error: "Unable to create this person", list: person.errors.messages}
    end
  end

  def show

  end

end
