// Algorithm Design:
//
// 1. Initialize quiz questions and UI elements.
// 2. Function to load the current question:
//    - Display question text and answer options.
//    - Clear previous selections.
// 3. When the user clicks "Submit":
//    - Get the selected answer.
//    - If correct, increase score.
//    - Move to the next question.
// 4. If there are more questions:
//    - Load the next question.
// 5. If all questions are answered:
//    - Show final score.
//    - Display restart button.
// 6. If restart button is clicked:
//    - Reload the page to restart the quiz.

// Quiz questions and answers dataset
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

// Get references to HTML elements
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; // Keeps track of the current question index
let score = 0; // Tracks the user's score

// Initial function call to load the first question
loadQuiz();

// Function to load the current quiz question and its options
function loadQuiz() {
  // Clears any selected answer from previous question
  deselectAnswers();

  // Get current quiz data
  const currentQuizData = quizData[currentQuiz];

  // Set question text and answer labels
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Function to uncheck all radio buttons (reset answers)
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// Function to get the selected answer
function getSelected() {
  let answer;

  // Loop through each radio button to check if it's selected
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id; // Store the ID of the selected answer
    }
  });

  return answer; // Return the selected answer's ID
}

// Event listener for the submit button
submitBtn.addEventListener("click", () => {
  const answer = getSelected(); // Get the user's selected answer

  if (answer) {
    // Ensure an answer was selected
    if (answer === quizData[currentQuiz].correct) {
      // Check if it's correct
      score++; // Increase score if correct
    }

    currentQuiz++; // Move to the next question

    if (currentQuiz < quizData.length) {
      loadQuiz(); // Load the next question
    } else {
      // Display final score and restart button
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
