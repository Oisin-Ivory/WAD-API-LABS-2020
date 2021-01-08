# Assignment 2 - Web API.

Name: Oisín Ivory
## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - Added Upcoming, displays movies in the API by date
 + Feature 2 - Added Top Rated, displays movies based on rating
 + Feature 3 = Added Similar movies, takes in a movie ID


## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
Navigate to https://github.com/Oisin-Ivory/WAD-API-LABS-2020 and download the zip version.	//The API
Navigate to https://github.com/Oisin-Ivory/WAD-API-ASSIGNMENT and download the zip version. //The React App
```

followed by installation

```bat
for API
Download MongoDB from https://www.mongodb.com/try/download/community
Once that is done unzip the API, then navigate to the apis root folder using 'cd .\movies-api\' 
then run 'npm install'.
Once it has installed the packages, add the .env file as below., then use 'npm start'

for the React App,
Unzip the react app then run 'npm install', once that is complete, then yse 'npm start'
```


## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=[TMDBKey]
mongoDB=mongodb://localhost:27017/webAppDB
SEED_DB=true
SECRET=ilikecake
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/movies/toprated | Get movies based on rating | N/A | N/A | N/A 
| /api/movies/upcoming | Get all reviews for movie | N/A | N/A | N/A 
| /api/movies/{movieid}/recommended	 | Get movies similar to movie id passed in | N/A | N/A | N/A 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).
I tried to make the routes for the API similar to [TMDB](https://developers.themoviedb.org/3) API.

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
In order to see any movies within the app you must be logged in. The app makes use of passport.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

Link to React App: https://github.com/Oisin-Ivory/WAD-API-ASSIGNMENT

~~~Javascript
	export const getRecommendations = id => {
    return fetch(
      '/api/movies/'+id+'/recommended',{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
  
   export const getTopRatedMovies = () => {
    return fetch(
      '/api/movies/toprated',{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpComingMovies = () => {
  return fetch(
    '/api/movies/upcoming',{headers:{
      'Authorization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
~~~

## Extra features
Created a signup and sign in pages. These accounts can add movies to their favourites and view their favourites. All the movies are saved for each account.

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  

I installed [Helmet](https://helmetjs.github.io/), to make my app more secure.
