function isPrime(number) {
    // Numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }

    // Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Not prime if divisible by i
        }
    }

    return true; // Prime if no factors found
}

function checkPrime() {
    const inputNumber = document.getElementById("number").value;
    const resultElement = document.getElementById("result");

    if (isPrime(Number(inputNumber))) {
        resultElement.textContent = `${inputNumber} is a prime number.`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `${inputNumber} is not a prime number.`;
        resultElement.style.color = "red";
    }
}
