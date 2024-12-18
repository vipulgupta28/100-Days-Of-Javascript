// Coded By Vipul Gupta
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");

// Base API URL
const BASE_URL = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json");

// Function to fetch a random quote from the API
async function fetchRandomQuote() {
    try {
        // Add a unique query parameter to prevent caching
        const API_URL = `${BASE_URL}&timestamp=${new Date().getTime()}`;
        
        // Fetch data from the API
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }

        // Decode the JSON response
        const data = await response.json();
        const quoteData = JSON.parse(data.contents);

        // Update the DOM with the fetched quote
        quoteText.textContent = `"${quoteData.quoteText}"`;
        authorText.textContent = quoteData.quoteAuthor
            ? `- ${quoteData.quoteAuthor}`
            : "- Unknown";
    } catch (error) {
        console.error("Error fetching the quote:", error);
        quoteText.textContent = "Oops! Unable to fetch a new quote. Please check your internet connection or try again later.";
        authorText.textContent = "";
    }
}

// Function to copy the quote to clipboard
function copyQuoteToClipboard() {
    const fullQuote = `${quoteText.textContent} ${authorText.textContent}`;
    navigator.clipboard.writeText(fullQuote).then(() => {
        alert("Quote copied to clipboard!");
    });
}

// Event listeners
newQuoteBtn.addEventListener("click", fetchRandomQuote);
copyQuoteBtn.addEventListener("click", copyQuoteToClipboard);

// Fetch the initial quote
fetchRandomQuote();
