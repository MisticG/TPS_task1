# External API's wieg18 task 1.
I have created a website using two external API's. 
One to call an API to access Chuck Norris jokes and the other one to search for movies to get more information about it. I thought it was a good idea to get back to basics by only using html, css- and js.files and node js for the backend part. I also used bootstrap to help a bit with the styling and functions. Furthermore I used some node packages such as node express, node fetch and nodemon to simplify using the code. 

# Install this:
To open and use the project you will have to download/clone the project and have node installed with the following packages:

Node express - install by typing **$ npm i** in the terminal and thereafter **$ npm install express --save** . Here is a guide https://expressjs.com/en/starter/installing.html

Node fetch - install by writing **$ npm install node-fetch --save** in your terminal. This to be able to use the fetch method in Node. Documentation on how to use: https://www.npmjs.com/package/node-fetch

Nodemon - this was only used to automatically restart the app after code change. Documentation: https://www.npmjs.com/package/nodemon. You don't need to install this if you are only looking at the project.

**Start the Application:**
type **$ npm run app** in your terminal and run **http://localhost:3000/** in your browser.

# Used API's: 
In the Chuck Norris part of the web page you are able to click on a button to get random jokes on the page. With every click you will get a new joke.
I used the API from RapidApi https://rapidapi.com/matchilling/api/chuck-norris and used the information to access the right resource.

In the search movie part of the web page (Movie knights) you are able to search on any word to get a list of movies containing the search word in the title (it's limited to 10 movies). You can click on any movie title that pops up to get more information about the specific movie. You can also type the title for a specific(!) movie if you're interested to only get information about that particular movie.
For this part I used the OMDb Api @http://www.omdbapi.com/ which is a free Api after registration. The reason I didn't use IMDb is because I had to register my debit card to use it for free with limited requests. 

