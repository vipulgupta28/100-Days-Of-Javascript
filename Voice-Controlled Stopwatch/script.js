let timer = null;
let elapsedTime = 0;
let isRunning = false;

const timeDisplay = document.getElementById("time-display");
const statusDisplay = document.getElementById("status");

// Format time as HH:MM:SS
function formatTime(time) {
  const hours = Math.floor(time / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Start stopwatch
function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    statusDisplay.textContent = "Stopwatch started.";
    timer = setInterval(() => {
      elapsedTime++;
      timeDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
  }
}

// Stop stopwatch
function stopStopwatch() {
  if (isRunning) {
    isRunning = false;
    statusDisplay.textContent = "Stopwatch stopped.";
    clearInterval(timer);
  }
}

// Reset stopwatch
function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  timeDisplay.textContent = formatTime(elapsedTime);
  statusDisplay.textContent = "Stopwatch reset.";
}

// Voice command recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const command = event.results[event.results.length - 1][0].transcript
      .trim()
      .toLowerCase();
    statusDisplay.textContent = `You said: "${command}"`;

    if (command === "start") {
      startStopwatch();
    } else if (command === "stop") {
      stopStopwatch();
    } else if (command === "reset") {
      resetStopwatch();
    } else {
      statusDisplay.textContent = `Command not recognized: "${command}"`;
    }
  };

  recognition.onstart = () => {
    statusDisplay.textContent = "Voice recognition started. Say a command!";
  };

  recognition.onerror = (event) => {
    statusDisplay.textContent = `Error: ${event.error}`;
  };

  recognition.start();
} else {
  statusDisplay.textContent = "Voice recognition not supported in this browser.";
}
