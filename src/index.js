//Global scope


// fetches

function getAllMovies(url){
    return fetch(url)
    .then(res=> res.json())
}

//the above is going to get all of the movies and then its going to be called:

getAllMovies('http://localhost:3000/movies')
.then(movieArray => console.log(movieArray))

//you dont write fetches in the global scope because they aren't reusable (idk what this means)

//now we are going to iterate all of the movies below and pass them through a render

movieArray.forEach(renderInNav)

//shorthand for above ( above is .then(movieArrauy => console.log(movieArray))

//here is a section for functions:

const title = document.querySelector('#title')
const description = document.querySelector('#description')
const detailedImage = document.querySelector('#detailed-image')
const yearReleased = document.querySelector('#year-released')
function renderInNav(movieObj)
const watched = document.querySelector('#watched')

{
    const img = document.createElement('img')
   img.src = movieObj.img
   img.addEventListener('click', () => renderDetail(movieObj))
   nav.appendChild(img)
}

function renderInNav(movieObj){
    const img = document.createElement('img')
    img.src = movieObj.img
    img.addEventListener('click', () => renderDetail(movieObj))
    new.appendChild(img)
}

function renderDetail(movieObj) {
    selectedMovie = movieObj
    title.textContent = movieObj.title
    description.textContent = movieObj.description
    detailedImage.src = movieObj.img
    yearReleased.textContent = movieObj.release_year
    
}


const nav = document.querySelector
('#movie-list')

// how to make watch button responsive 

watched.addEventListener('click', toggleWatched);

function toggleWatched(
    selectedMovie.watched =!selectedMovie.watched)