
const questionContainer = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")
const resultDiv = document.getElementById("result")
const restartButton = document.getElementById("restart-btn");

let shuffleQuestion, currentQuestion, score;
// questions
const question = [
    {
        question: "vrefdv",
        answer: [
            { text: "ebrdfab", correct: true },
            { text: "badf<", correct: false },
            { text: "baerf", correct: false },
            { text: "aerb", correct: false },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: false },
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true },
            { text: "", correct: false },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: false },
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true },
            { text: "", correct: false },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
        ],
    },
    {
        question: "",
        answer: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true },
        ],
    },
];

startQuiz();

function startQuiz() {
    score = 0;
    
    shuffleQuestion = question.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    nextButton.classList.remove("hide");
    restartButton.classList.add("hide");
    resultDiv.classList.add("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestion[currentQuestion]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach((answer, index) => {
        const inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "answer" + index;
        radio.name = "answer";
        radio.value = index;

        const label = document.createElement("label");
        label.htmlFor = "answer" + index;
        label.innerText = answer.text;
    });
}

function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    const answerIndex = Array.from(
        answerButton.querySelectorAll("input")
    ).findIndex((radio) => radio.checked);
    if (answerIndex !== -1) {
        if (shuffleQuestion[currentQuestion].answer[answerIndex].
            correct) {
                score++;
            }
            currentQuestionIndex++;
            if (shuffleQuestion.length > currentQuestionIndex) {
                setNextQuestion();
            } else {
                endQuiz();
            }
    } else {
        alert("Please select an answer.");
    }
});

restartButton.addEventListener("click", startQuiz);

function endQuiz() {
    questionContainer.style.display = "none";
    nestButton.classList.add("hide");
    restartButton.classList.remove("hide");
    resultDiv.classList.remove("hide");
    resultDiv.innerText = `Your final score: ${score} / ${shuffleQuestion.length}`;
}