// Coded By Vipul Gupta
const quizBox = document.getElementById("quiz-box");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let questions = [];

// Fetch questions from the API
async function fetchQuestions() {
  const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
  const data = await response.json();
  questions = data.results;
  showQuestion();
}

// Display the current question
function showQuestion() {
  const question = questions[currentQuestion];
  questionElement.innerHTML = decodeHTML(question.question);
  optionsElement.innerHTML = "";

  const answers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = decodeHTML(answer);
    button.addEventListener("click", () => checkAnswer(answer));
    optionsElement.appendChild(button);
  });

  nextButton.classList.add("hidden");
}

// Decode HTML entities in API text
function decodeHTML(html) {
  const text = document.createElement("textarea");
  text.innerHTML = html;
  return text.value;
}

// Check the selected answer
function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestion].correct_answer;

  if (selectedAnswer === correctAnswer) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
  }

  Array.from(optionsElement.children).forEach((button) => {
    button.disabled = true;
    if (button.textContent === decodeHTML(correctAnswer)) {
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  });

  nextButton.classList.remove("hidden");
}

// Load the next question
nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

// End the quiz
function endQuiz() {
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  nextButton.classList.add("hidden");
}

// Start the quiz
fetchQuestions();
