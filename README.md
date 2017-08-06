This is a small test app that uses a react front end  and rails 5 api on the backend.

The live test app is available at the following url

https://amex-person-test.herokuapp.com/


To install locall: from a console OSX or linux shell 

1. clone the repo:  git clone git@github.com:hraynaud/amex_person.git
2. Install ruby version 2.4.1 or above
3. Install the bundler gem using gem install bundler
4. run the bundle command to install required gems
5. run rake db:setup

-- The rails backend should be setup at this point
You can verify but typing: rails s 

6. Open another console window or different shell
7. type npm install to install the client side dependences
8. to start the client type npm run devserve

--- the client is now installed and running

Open the client via your browser at http://localhost:8080

There is no need to open the server side app in a browser.

1. Enter a name and an email address and click preview
2. The preview view will appear. 
3. Click submit if successful you should see a simple success message.
4. Submitting a person with a duplicate email results in an error






