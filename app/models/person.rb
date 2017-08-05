class Person < ApplicationRecord
  #
  # Rails ActiveSupport::Inflector would, by convention  look for a 'people' table in DB, ...
  # ... override that here to avoid confusing non-rails reviewers who might expect table and model name to match...
  # ... note however the rails convention of (plural db table <==> singular model name) is preserved
  self.table_name = "persons" 


  before_validation :downcase_email #Downcase email for aesthetics and to reenforce uniqueness/case-insensitivity constraint

  validates :email, uniqueness: true
  validates :email, :name, presence: true # assume these fields are required though not explicitly stated in the specifications



  private
  def downcase_email
    self.email = email.downcase
  end
end
