Countries of the World Resource App

This project acts as a template for displaying countries using React and Redux.

- displays a list of the countries using a component Country for display
- allows you to click the country card, and display the countries' profile ("Capital, Currency, Languages and population
- Provides you the link 'Find out more' that navigates you to wiki page to show more details about the country
- allows you to search for a specific country by name

What's Being Used?
React for managing the presentation logic of your application.
Redux for generating and managing your state model.
Axios for making AJAX calls to a server.
CSS3 for stylesheet compilation.
Babel for compiling ES2015+ down to ES5 compatible code.
WebPack for bundling code down to a single file and enabling hot module reloading.
Express for serving up the development server.

About EndPoint?
Given a data API located here: https://restcountries.eu/#api-endpoints-all

1. To get specific countries by searching for name, get data from https://restcountries.eu/rest/v2/name/{name} ({name being the country name})
2. To get all the countries, used this endpoint- https://restcountries.eu/rest/v2/all

Getting Started?
In order to get started developing, you'll need to do a few things first.

1. Clone this repository
2. If you don't have node installed download it here: https://nodejs.org/en/
3. To Install all of the node_modules required for the package, run below command from root folder.

   npm install

4. Lastly, run the start command to get the project off the ground. This command will build your files using the Webpack dev-server

npm start

5. Head over to http://localhost:3000 to see your app live!
