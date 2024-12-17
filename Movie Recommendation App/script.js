// Coded By Vipul Gupta
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const movieContainer = document.getElementById('movie-container');
const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    searchMovies(query);
  }
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      searchMovies(query);
    }
  }
});

async function searchMovies(query) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    movieContainer.innerHTML = `<p>No movies found. Please try again later.</p>`;
  }
}

async function getRecommendations(genre) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`);
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    movieContainer.innerHTML = `<p>No recommendations available. Please try again later.</p>`;
  }
}

function displayMovies(movies) {
  movieContainer.innerHTML = '';
  if (movies && movies.length > 0) {
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Rating:</strong> ${movie.vote_average}</p>
      `;
      movieContainer.appendChild(movieElement);
    });
  } else {
    movieContainer.innerHTML = `<p>No movies found. Please try again with a different search term.</p>`;
  }
}
