// Define the Quiz questions d answers

const Questions = [
  {
    Question: "What is the Capital of Sweden?",
    answers: {
      a: "Dublin",
      b: "Stockholm",
      c: "Tokyo",
      d: "Paris"
    },
    correctAnswer: "b"
  },
  {
    Question: "What was Disney movie the saved them?",
    answers: {
      a: "SnowWhite",
      b: "Steamboat willie",
      c: "Pinocchio",
      d: "Dumbo"
    },
    correctAnswer: "a"
  },
  {
    Question: "who sing the song Tutti Frutti 1955?",
    answers: {
      a: "Little Richard",
      b: "Elvis Prasley",
      c: "Paul Anka",
      d: "Sammy Davis Jr"
    },
    correctAnswer: "a"
  }
];

// Function to display the quiz
function displayQuiz() {
  const quizContainer = document.getElementById('quiz');
  let quizHtml = '';

  questions.forEach((question, index) => {
      quizHtml += `<div>
                      <p>${index + 1}. ${question.question}</p>
                      <ul>
                          <li><input type="radio" name="question${index}" value="a">${question.answers.a}</li>
                          <li><input type="radio" name="question${index}" value="b">${question.answers.b}</li>
                          <li><input type="radio" name="question${index}" value="c">${question.answers.c}</li>
                          <li><input type="radio" name="question${index}" value="c">${question.answers.d}</li>
                      </ul>
                  </div>`;
  });

  quizContainer.innerHTML = quizHtml;
}

// Function to check answers and calculate score

function checkAnswer() {
  let score = 0;

  question.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedAnswer) {
      if (selectedAnswer.value === question.correctAnswer) {
        score++;
      }
    }
  });
  alert(`Your score is: ${score}/${questions.length}`);
}

