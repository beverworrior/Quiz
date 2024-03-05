const questionContainer = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-button")
const nestButton = document.getElementById("nest-btn")
const resultDiv = document.getElementById("result")

let shuffleQuestion, currentQuestion, score;
// questions
const question = [
    {
        question: "",
        answer: [
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: true},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: true},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false},
        ],
    },
    {
        question: "",
        answer: [
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: true},
        ],
    },
];