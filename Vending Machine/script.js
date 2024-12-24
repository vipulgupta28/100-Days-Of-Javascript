const screen = document.getElementById("screen");
const items = document.querySelectorAll(".item");
const amountInput = document.getElementById("amount");
const payButton = document.getElementById("pay-button");

let selectedItem = null;

// Select an item
items.forEach(item => {
  item.addEventListener("click", () => {
    const name = item.getAttribute("data-name");
    const price = parseFloat(item.getAttribute("data-price")).toFixed(2);

    selectedItem = { name, price };
    screen.textContent = `Selected: ${name} ($${price})`;
  });
});

// Handle payment
payButton.addEventListener("click", () => {
  if (!selectedItem) {
    screen.textContent = "Select an item first.";
    return;
  }

  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    screen.textContent = "Insert valid money.";
    return;
  }

  if (amount >= selectedItem.price) {
    const change = (amount - selectedItem.price).toFixed(2);
    screen.textContent = `Dispensed: ${selectedItem.name}. Change: $${change}`;
    selectedItem = null;
    amountInput.value = "";
  } else {
    const remaining = (selectedItem.price - amount).toFixed(2);
    screen.textContent = `Not enough money. Insert $${remaining} more.`;
  }
});
