//create function and variables for timer 

const startingMinutes = 1; 
let time = startingMinutes * 60; 

const countdownEl = document.getElementById('countdown'); 

setInterval(updateCountdown, 1000); 

function updateCountdown() {
    const minutes = Math.floor(time / 60); 
    let seconds = time / 60;   

    countdownEl.innerHTML; 
    time--; 
 }

//Created an alert for the user just a basic overview of the game, time and penalties 

alert("The correct answer will be displayed in red. You have 60 seconds to answer all questions. For every incorrect question your time will reduce by 3 seconds")

//Created and assigned variables for HTML ID elements 

let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')

let questionContainerElement  = document.getElementById ('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

//Add events for start/next buttons, once the buttond are clicked the code will be executed 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++ 
    setNextQuestion() 
})

//Created function to start the game 
function startGame() {
    console.log('Started')//console logging that game has started
    startButton.classList.add('hide') //hides the start button once clicked on
    shuffledQuestions = questions.sort(() => Math.random() - .5) //allows for shuffling the questions should the game be restarted
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide') //unhides the question buttons
    setNextQuestion()
}

//Created function to show questions and reset answers chosen from last question answered 
function setNextQuestion(){ 
    resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

//Created a function to show questions/populate different answers
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
//Created function that clears the answers once next question is clicked 
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}   
//Created a function that executes once user selects their answer 
function selectAnswer (e) {
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct//this will check to see if correct
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
    clearStatusCLass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusCLass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//Created questions with multiple choice answers

const questions = [ 
    {
        question: 'In which HTML element do we place JavaScript code?', 
        answers: [
            { text: '<script>', correct: true}, 
            { text: '<javascript>', correct: false},
            { text: '<title>', correct: false},
            { text: '<style>', correct: false}
        ]
    },


    {
        question: 'If you want to reference a class using CSS, which of the following is correct ?', 
        answers: [
            { text: '.', correct: true}, 
            { text: '#', correct: false},
            { text: '_', correct: false},
            { text: '*', correct: false}
        ]
    },

    {
        question: 'Choose from the three types of styling what the following code style represents: <link href="style.css rel="stylesheet" type= "text/css">', 
        answers: [
            { text: 'internal', correct: false}, 
            { text: 'external', correct: true}, 
            { text: 'in-line', correct: false},
            { text: 'line', correct: false}
        ]
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?', 
        answers: [ 
            { text: '<script name ="xxx.js>', correct: false}, 
            { text: '<script href ="xxx.js>', correct: false}, 
            { text: '<script src ="xxx.js>', correct: true}
        ]
    },

    {
        question: 'How do you write "Hello World" in an alert box?', 
        answers: [
            { text: 'alertBox("Hello World")', correct: false}, 
            { text: 'msgBox("Hello World")', correct: false}, 
            { text: 'msg("Hello World")', correct: false},
            { text: 'alert("Hello World")', correct: true}
        ]
    },

    {
        question: 'How do you create a function in JavaScript?', 
        answers: [
            { text: 'function = myFunction()', correct: true}, 
            { text: 'function:myFunction()', correct: false}, 
            { text: 'function myFunction()', correct: false},
            { text: 'function-myFunction()', correct: false}
        ]
    }
]