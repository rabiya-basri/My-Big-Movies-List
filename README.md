# My-Big-Movies-List

### Overview
This project is built using rect-redux which to allow the user to keep track of his movies list, which allow user to Add movies , remove movie, search box functionality provided which allow user to search and can sort movies based on ranking.

### Dependencies

- axios `npm install axios`
- redux `npm install redux`
- redux-thunk `npm install redux-thunk`
- react-redux `npm install react-redux`
- MaterialUI `npm install @material-ui/core`

### API Details
- GET(movie image) : `https://www.omdbapi.com/?s=${moviename}&apikey=[YOURKEY]`

### Description

* Form Validation
  - Form validation is performed which does not allow user to submit empty form
  - while addind movie details GET method is performed to get the image from the api based on the movie name
* SearchBox
  - allow the user to search movie based on the available movies
* sort by ranking
  - user can sort movies list based on the ranking
* movies stats
  - displays the top ranked movie amoung the movie list and total movies

### link to view project demo




