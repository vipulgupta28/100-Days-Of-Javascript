const qrInput = document.getElementById("qr-input");
const generateButton = document.getElementById("generate-button");
const qrCodeContainer = document.getElementById("qr-code");
const downloadButton = document.getElementById("download-button");

// Generate QR Code
generateButton.addEventListener("click", () => {
  const qrText = qrInput.value.trim();

  if (!qrText) {
    alert("Please enter text or a URL to generate a QR Code.");
    return;
  }

  // Clear previous QR Code
  qrCodeContainer.innerHTML = "";

  // Generate new QR Code
  const qrCode = new QRCode(qrCodeContainer, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });

  // Enable the download button
  downloadButton.classList.remove("hidden");

  // Update the download button functionality
  setTimeout(() => {
    const qrCanvas = qrCodeContainer.querySelector("canvas");
    downloadButton.onclick = () => {
      const link = document.createElement("a");
      link.href = qrCanvas.toDataURL("image/png");
      link.download = "qr-code.png";
      link.click();
    };
  }, 300); // Delay to ensure QR code is rendered
});
