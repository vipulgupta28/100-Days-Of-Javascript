const apiURL = 'https://api.coingecko.com/api/v3/coins/markets';
const cryptoContainer = document.getElementById('crypto-container');

async function fetchCryptoPrices() {
  try {
    const response = await fetch(`${apiURL}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
    const data = await response.json();
    displayCryptos(data);
  } catch (error) {
    cryptoContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
  }
}

function displayCryptos(cryptos) {
  cryptoContainer.innerHTML = '';
  cryptos.forEach(crypto => {
    const cryptoCard = document.createElement('div');
    cryptoCard.className = 'crypto-card';
    cryptoCard.innerHTML = `
      <img src="${crypto.image}" alt="${crypto.name}">
      <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
      <p>$${crypto.current_price.toLocaleString()}</p>
    `;
    cryptoContainer.appendChild(cryptoCard);
  });
}

fetchCryptoPrices();
