document.getElementById('getJokeBtn').addEventListener('click', fetchJoke);

function fetchJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single'; // JokeAPI URL for fetching random jokes

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let jokeText = '';

            if (data.type === 'single') {
                jokeText = data.joke;
            } else {
                jokeText = `${data.setup} - ${data.delivery}`;
            }

            document.getElementById('joke').textContent = jokeText;
        })
        .catch(error => {
            document.getElementById('joke').textContent = 'Oops! Something went wrong, please try again later.';
        });
}
