// Coded By Vipul Gupta
const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

document.getElementById("searchButton").addEventListener("click", function () {
    const word = document.getElementById("wordInput").value.toLowerCase();
    const resultBox = document.getElementById("resultBox");
    const wordTitle = document.getElementById("wordTitle");
    const wordMeaning = document.getElementById("wordMeaning");
    const wordExample = document.getElementById("wordExample");

    wordTitle.textContent = "";
    wordMeaning.textContent = "";
    wordExample.textContent = "";
    resultBox.style.display = "none";

    if (!word) {
        wordTitle.textContent = "Please enter a word.";
        wordMeaning.classList.add("error");
        resultBox.style.display = "block";
        return;
    }

    fetch(`${apiUrl}${word}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Word not found!");
            }
            return response.json();
        })
        .then((data) => {
            const entry = data[0];
            const meaning = entry.meanings[0].definitions[0].definition;
            const example = entry.meanings[0].definitions[0].example || "No example available for this word.";

            // Populate the UI
            wordTitle.textContent = `${entry.word.charAt(0).toUpperCase() + entry.word.slice(1)}`;
            wordMeaning.textContent = `Meaning: ${meaning}`;
            wordExample.textContent = `Example: ${example}`;
            wordMeaning.classList.remove("error");
            resultBox.style.display = "block";
        })
        .catch((error) => {
            wordTitle.textContent = "Word not found!";
            wordMeaning.textContent = error.message;
            wordMeaning.classList.add("error");
            wordExample.textContent = "";
            resultBox.style.display = "block";
        });
});
