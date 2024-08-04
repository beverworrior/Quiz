// jshint esversion: 6

const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "London",
            b: "Paris",
            c: "Berlin"
        },
        correctAnswer: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Mars",
            b: "Jupiter",
            c: "Saturn"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: {
            a: "H",
            b: "O",
            c: "H2O"
        },
        correctAnswer: "c"
    }
];

// Function to display the quiz
function displayQuiz() {
    const quizContainer = document.getElementById('quiz');
    let quizHtml = '';

    questions.forEach((question, index) => {
        quizHtml += `<div class="quiz-question">
                        <label>${index + 1}. ${question.question}</label>
                        <ul>
                            <li><input type="radio" id="q${index}a" name="question${index}" value="a"><label for="q${index}a">${question.answers.a}</label></li>
                            <li><input type="radio" id="q${index}b" name="question${index}" value="b"><label for="q${index}b">${question.answers.b}</label></li>
                            <li><input type="radio" id="q${index}c" name="question${index}" value="c"><label for="q${index}c">${question.answers.c}</label></li>
                        </ul>
                    </div>`;
    });

    quizContainer.innerHTML = quizHtml;
}

// Function to check answers and calculate score
function checkAnswers() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === question.correctAnswer) {
                score++;
            }
        }
    });

    alert(`Your score is: ${score}/${questions.length}`);
}

// Display the quiz when the page loads
displayQuiz();

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', checkAnswers);
