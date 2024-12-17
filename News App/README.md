# DAY 5
## News-App
A simple web application that fetches and displays the latest news articles based on a search query using the NewsAPI.

Features
Fetches top news articles based on user-defined search keywords.
Displays news article title, description, source, and published date.
Allows users to click on an article to read more on the original site.
Refresh button to reload the app.
Navigation and search bar for easy querying.
Getting Started
Prerequisites
API Key: Obtain a free API key from NewsAPI by signing up.

Installation
Clone this repository:

``
git clone https://github.com/yourusername/news-app.git
cd news-app
``
Set up an .env file with your API key (or you can directly edit the script to include your key):

``
echo "API_KEY=your_api_key" > .env
``
Open index.html in a browser to run the app.

Usage
Upon loading, the app will display news articles related to a default topic.
Use the Search bar to enter a keyword and see relevant news articles.
Click on an article's title or image to read more on the original source.
Code Overview
fetchNews(query): Fetches news articles based on the search query from NewsAPI.
bindData(articles): Prepares the articles and binds them to the DOM.
fillDataInCard(cardClone, article): Fills in the individual news cards with article information.
onNavItemClick(id): Allows navigation based on pre-defined categories.
API Configuration
Replace 'your_api_key' in the JavaScript file with your actual NewsAPI key.

``
const API_KEY = "your_api_key";
``
Demo

Built With
HTML
CSS
JavaScript
NewsAPI
Acknowledgments
NewsAPI for providing free access to news data.
Icons and design inspiration from Google News.
