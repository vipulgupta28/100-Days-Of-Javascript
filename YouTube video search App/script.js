// Coded By Vipul Gupta
const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";
const videoList = document.getElementById("videoList");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

// Fetch videos from YouTube
async function fetchVideos(query) {
    try {
        const response = await fetch(
            `${BASE_URL}?part=snippet&maxResults=12&q=${encodeURIComponent(
                query
            )}&type=video&key=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        displayVideos(data.items);
    } catch (error) {
        console.error("Error fetching videos:", error);
        videoList.innerHTML = `<p style="color: red; text-align: center;">Failed to fetch videos. Please try again later.</p>`;
    }
}

// Display videos in the DOM
function displayVideos(videos) {
    videoList.innerHTML = "";

    if (videos.length === 0) {
        videoList.innerHTML = `<p style="text-align: center;">No videos found for your search.</p>`;
        return;
    }

    videos.forEach((video) => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        videoItem.innerHTML = `
            <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
            <h3><a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">${video.snippet.title}</a></h3>
            <p>${video.snippet.channelTitle}</p>
        `;

        videoList.appendChild(videoItem);
    });
}

// Search button click event
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchVideos(query);
    } else {
        alert("Please enter a search term.");
    }
});
