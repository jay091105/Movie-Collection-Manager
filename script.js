var movies = [
    { title: "Avengers", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "Shaktiman", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Housefull", genre: "Drama", rating: 8.8, releaseYear: 2015 },
];

function displayMovies() {
    var movieContainer = document.getElementById('movies');
    movieContainer.innerHTML = '';
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        movieContainer.innerHTML += `
            <div class="movie">
                <b>${movie.title}</b> (${movie.genre}), Rating: ${movie.rating}, Released: ${movie.releaseYear}
            </div>`;
    }
}

document.getElementById('movieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var title = e.target.elements.title.value;
    var genre = e.target.elements.genre.value;
    var rating = parseFloat(e.target.elements.rating.value);
    var releaseYear = parseInt(e.target.elements.releaseYear.value);

    movies.push({ title: title, genre: genre, rating: rating, releaseYear: releaseYear });
    displayMovies();
    e.target.reset();
});

function findHighestRatedMovie() {
    var highestRated = movies[0];
    for (var i = 1; i < movies.length; i++) {
        if (movies[i].rating > highestRated.rating) {
            highestRated = movies[i];
        }
    }
    document.getElementById('highestRatedResult').innerHTML = `
        <div><b>${highestRated.title}</b> (${highestRated.genre}), Rating: ${highestRated.rating}, Released: ${highestRated.releaseYear}</div>`;
}

function searchMovieByName() {
    var searchTitle = document.getElementById('searchTitle').value.toLowerCase();
    var foundMovie = null;
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase() === searchTitle) {
            foundMovie = movies[i];
            break;
        }
    }
    if (foundMovie) {
        document.getElementById('searchResult').innerHTML = `
            <div><b>${foundMovie.title}</b> (${foundMovie.genre}), Rating: ${foundMovie.rating}, Released: ${foundMovie.releaseYear}</div>`;
    } else {
        document.getElementById('searchResult').innerHTML = '<p>Movie not found.</p>';
    }
}
displayMovies();
