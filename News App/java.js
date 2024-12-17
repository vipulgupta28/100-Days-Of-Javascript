const API_KEY = '5689da049eb240f4aa91c8aa6e6adfaf';
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const newsContainer = document.getElementById('news-container');

async function fetchNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.articles) {
            displayNews(data.articles);
        } else {
            newsContainer.innerHTML = '<p>No news available at the moment.</p>';
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = '<p>Error fetching news. Please try again later.</p>';
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');

        newsCard.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
            ${article.urlToImage ? `<img src="${article.urlToImage}" alt="News image">` : ''}
        `;

        newsContainer.appendChild(newsCard);
    });
}

fetchNews();
