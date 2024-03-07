const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "Who said this iconic line I be back?",
    answers: [
      { text: 'Arnold Schwarzenegger', correct: true },
      { text: "Bruce Willis", correct: false },
      { text: "Sylvester Stallone", correct: false },
      { text: "Chuck Norris", correct: false }
    ]
  },
  {
    question: "What year did the First Back to the future release?",
    answers: [
      { text: 'July 1, 1985', correct: false },
      { text: 'July 3, 1985', correct: false },
      { text: 'July 9, 1985', correct: true },
      { text: 'July 15, 1985', correct: false }
    ]
  },
  {
    question: "What was Disney's first long animated movie?",
    answers: [
      { text: "Dumbo", correct: false },
      { text: "Snow White", correct: true },
      { text: "Pinocchio", correct: false },
      { text: "Bambi", correct: false }
    ]
  },
  {
    question: "What is the name of the Godfather?",
    answers: [
      { text: "Vito Corleone", correct: true },
      { text: "Marlon Brando", correct: false }
    ]
  },
  {
    question: "What was Pixar first ever movie?",
    answers: [
      { text: "Bug's Life", correct: false },
      { text: "Toy Story", correct: true },
      { text: "Monsters, Inc.", correct: false },
      { text: "Finding Nemo", correct: false }
    ]
  },
  {
    question: "What year did the first Pixar movie release?",
    answers: [
      { text: "November 2, 1993", correct: false },
      { text: "November 24, 1996", correct: false },
      { text: "November 25, 1998", correct: false },
      { text: "November 22, 1995", correct: true }
    ]
  },
  {
    question: "What country was James Bond from?",
    answers: [
      { text: "Scotland", correct: true },
      { text: "England", correct: false },
      { text: "Ireland", correct: false },
      { text: "Wales", correct: false }
    ]
  },
  {
    question: "Which movie did a hybrid of real and animated character?",
    answers: [
      { text: "Cool World", correct: true },
      { text: "Marry Poppins", correct: true },
      { text: "Who Framed Roger Rabbit", correct: true },
      { text: "Space Jam", correct: true }
    ]
  },
  {
    question: "Which was the first animated movie to win a Oscar?",
    answers: [
      { text: "The Incredibles", correct: false },
      { text: "Finding Nemo", correct: false },
      { text: "Spirited Away", correct: false },
      { text: "Shrek", correct: true }
    ]
  },
  {
    question: "Which director did the movie Jaws?",
    answers: [
      { text: "George Lucas", correct: false },
      { text: "Steven Spielberg", correct: true },
      { text: "Harrison Ford", correct: false },
      { text: "Carrie Fisher", correct: false }
    ]
  },
  {
    question: "what year did star wars release?",
    answers: [
      { text: "16 december 1977", correct: true },
      { text: "1 december 1977", correct: false },
      { text: "26 december 1977", correct: false },
      { text: "10 december 1977", correct: false }
    ]
  },
  {
    question: "Which movie comes this line from Follow the yellow brick road?",
    answers: [
      { text: "Dumbo", correct: false },
      { text: "Wizard of OZ", correct: true },
      { text: "Labyrinth", correct: false },
      { text: "Goonies", correct: false }
    ]
  },
  {
    question: "What is the name of boss in the first Ghostbusters?",
    answers: [
      { text: "Gate Keeper", correct: false },
      { text: "Gozer", correct: true },
      { text: "Key Bearer", correct: false },
      { text: "Bambi", correct: false }
    ]
  },
  {
    question: "What was the first Indiana Jones?",
    answers: [
      { text: "Kingdom of the Crystal Skull", correct: false },
      { text: "Raiders of the Lost Ark", correct: true },
      { text: "Temple of Doom", correct: false },
      { text: "Last Crusade", correct: false }
    ]
  },
  {
    question: "In smokey and the bandit what was reg number on his car?",
    answers: [
      { text: "Ban1", correct: true },
      { text: "Bandit", correct: false },
      { text: "Smokey", correct: false },
      { text: "Frog", correct: false }
    ]
  },
]
