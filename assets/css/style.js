const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = question.sort(() => Math.random() - 0.5)
    questionContainerElement.classList.remove("hide")
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const question = [
    {
        question: "what is 4 + 4",
        answers: [
            { text: "8", correct: true},
            { text: "10", correct: false},
            { text: "12", correct: false},
            { text: "14", correct: false},
        ]
    }
]