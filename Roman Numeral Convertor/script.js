function convertToRoman() {
            const number = parseInt(document.getElementById("number").value);
            const resultElement = document.getElementById("result");

            if (isNaN(number) || number < 1 || number > 3999) {
                resultElement.textContent = "Please enter a valid number between 1 and 3999.";
                resultElement.style.color = "#f85149";
                return;
            }

            resultElement.style.color = "#c9d1d9";

            const romanNumerals = [
                { value: 1000, numeral: "M" },
                { value: 900, numeral: "CM" },
                { value: 500, numeral: "D" },
                { value: 400, numeral: "CD" },
                { value: 100, numeral: "C" },
                { value: 90, numeral: "XC" },
                { value: 50, numeral: "L" },
                { value: 40, numeral: "XL" },
                { value: 10, numeral: "X" },
                { value: 9, numeral: "IX" },
                { value: 5, numeral: "V" },
                { value: 4, numeral: "IV" },
                { value: 1, numeral: "I" }
            ];

            let roman = "";
            let remaining = number;

            for (const { value, numeral } of romanNumerals) {
                while (remaining >= value) {
                    roman += numeral;
                    remaining -= value;
                }
            }

            resultElement.textContent = `Roman Numeral: ${roman}`;
        }
