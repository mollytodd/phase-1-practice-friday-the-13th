# Deliverables
As a user, I can:

1. View all movies in the nav element on page load
- [] Fetch all movie data
- [] Iterate over the array of movies
- [] Create <img> for each movie
- [] add a src to each <img> from each movieObject
- [] select the nav element as anchor point
- [] Append each <img> to anchor
2. View the 1st movie details on page load
- [] fetch data for 1st movie? (if necessary)
- [] select the proper dom elements
- [] set attributes of dom elements with selected movie object properties
- [] call render function and send  1st movie object 
3. Click a movie in the nav and see its details in the details section
-[] add event listener to each img in nav
-[] use renderDetail function from above
-[]
4. Click a "watched" button which toggles; it persists only in the DOM
-[] add event listener to the button 
-[] cb needs a conditional that sets the button text
-[] cb will flip the value of watched for the detailed movie
5. Enter a number of drops for eadh movie and have it persist in the DOM


MANTRA
1. Get data
2. Create new elements
3. Add data to new elements
4. Select anchor from DOM
5. Appnd new elements to anchor

## Data shape

  "movies" : [
        {
            "id": 1,
            "title": "Friday the 13th",
            "release_year": 1980,
            "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
            "image": "./assets/f13-1.jpeg",
            "watched": false,
            "blood_amount": 0
        },