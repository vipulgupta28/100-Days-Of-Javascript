function encryptText() {
    const text = document.getElementById('text').value;
    const password = document.getElementById('password').value;

    if (!text || !password) {
        alert("Please enter both text and password.");
        return;
    }

    // Encrypt the text using AES with the password as the key
    const encrypted = CryptoJS.AES.encrypt(text, password).toString();

    // Display the encrypted text
    document.getElementById('result').value = encrypted;
}

function decryptText() {
    const encryptedText = document.getElementById('result').value;
    const password = document.getElementById('password').value;

    if (!encryptedText || !password) {
        alert("Please enter the encrypted text and password.");
        return;
    }

    // Decrypt the text using AES with the password as the key
    const bytes = CryptoJS.AES.decrypt(encryptedText, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) {
        alert("Incorrect password or invalid encrypted text.");
    } else {
        // Display the decrypted text
        document.getElementById('result').value = decrypted;
    }
}
