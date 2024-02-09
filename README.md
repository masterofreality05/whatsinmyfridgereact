a. The title of your site and a link to the URL where it is deployed

My application is titled "What's in my fridge?"
You can find the application hosted on Render at 
https://whats-in-my-fridge-react-app.onrender.com/

b. Describe what your website does
My website
List the features you implemented and explain why you chose those
features to implement
-Where your tests are and how to run them


-Walk someone through the standard user flow for the website
We start at the homepage, which allows a user to enter various food ingrediants into a search bar and begin looking for matching recipes, via the Edamam Recipe API. 

Then if logged in, the user will be able to add any recipe (which upon searching is stored in our postgres database automatically), To their favourites, if no logged in user is found, they are prompted to login/register in order to create a new account. 

For every searched recipe stored in the database, each ingrediant they contain are stored in the database (avoiding duplication by means of a duplicate check). 
When logged in the user can view the list of all of these ingrediants and click to add any that they might own to their own "fridge" which will then be populated in their user profile page. 

The user profile page shows the users ingrediants, and facillitates a search for recipes that may match their owned ingrediants. Once searched the user is also able to bookmark these matching recipes, which all bookmarked recipes will be populated also as a list in the user profile page. 

Lastly, all searched recipes that are added upon their search, can be viewed on the Recipes page, and filtered alphabetically to help navigate the large number of recipes. 

Registering is achieved by filling out a react form, provided by Formik, and results in a new user stored the databse, and the returned user data + newly created token are then returned and stored in the apps state, the token is then available for authorizing protected routes. 

Logging in is also achieved through a react form and returns a token and updates the application wide (by means of context providing) user state to null, before navigating (redirecting) back to the home page.

f. Keep the API in there, and if you have anything to say about the API then
add some notes. If you have created your own API, please document the
process.
-Identify the technology stack used to create your website
The technology stack used in this application is a combination of a React app which dynamically creates the front-end interface, while Node Express app creates a CRUD functional back-end server, which is primarily responsible for communicating to the postgres database. 

h. Include anything else that you feel is important to share
3. Include your README on your GitHub repository.
4. Take a minute to review your GitHub repository. Is everything there? Is it neatly
organized?
5. Submit your full and final project to your mentor.
6. Discuss it with them on your next call.