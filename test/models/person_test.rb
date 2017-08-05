require 'test_helper'

class PersonTest < ActiveSupport::TestCase
   test "email is downcased" do
     p = Person.new({email: "SomeGUyWithBlaCKCarD@AmEX.coM", name: "Herby"})
     p.valid?
     assert_equal "someguywithblackcard@amex.com", p.email
   end


   test "invalid with duplicate email" do
     p = Person.new({email: "SomeGUyWithBlaCKCarD@AmEX.coM", name: "Herby"})
     p.save
     p2 = Person.new({email: "SomeGUyWithBlaCKCarD@AmEX.coM", name: "Raynaud"})
     p2.save
     assert_includes p2.errors.messages[:email], "has already been taken"
   end

end
