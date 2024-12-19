// Coded By Vipul Gupta
async function searchPokemon() {
            const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
            const resultDiv = document.getElementById('result');

            if (!pokemonName) {
                resultDiv.innerHTML = '<p>Please enter a Pokémon name.</p>';
                return;
            }

            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                if (!response.ok) throw new Error('Pokémon not found');

                const data = await response.json();
                resultDiv.innerHTML = `
                    <h2>${data.name.toUpperCase()} #${data.id}</h2>
                    <p>Weight: ${data.weight} Height: ${data.height}</p>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    <span class="badge">${data.types[0].type.name.toUpperCase()}</span>
                    <table>
                        <tr><th>Base</th><th>Stats</th></tr>
                        ${data.stats.map(stat => `
                            <tr>
                                <td>${stat.stat.name.toUpperCase()}:</td>
                                <td>${stat.base_stat}</td>
                            </tr>`).join('')}
                    </table>
                `;
            } catch (error) {
                resultDiv.innerHTML = '<p>Pokémon not found. Please try again.</p>';
            }
        }
