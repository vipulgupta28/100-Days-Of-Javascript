document.getElementById('searchBtn').addEventListener('click', fetchRecipes);

function fetchRecipes() {
    const ingredients = document.getElementById('ingredientSearch').value;
    const apiKey = 'YOUR_SPOONACULAR_API_KEY'; // Replace with your own Spoonacular API Key
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data);
        })
        .catch(error => {
            document.getElementById('recipeResults').innerHTML = '<p>Sorry, something went wrong. Please try again.</p>';
        });
}

function displayRecipes(recipes) {
    const resultsContainer = document.getElementById('recipeResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients: </strong>${recipe.ingredients.map(item => item.name).join(', ')}</p>
            <p><a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">See Full Recipe</a></p>
        `;
        resultsContainer.appendChild(recipeCard);
    });
}
