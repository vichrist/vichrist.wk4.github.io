
// questions/options/answer that will be part of quiz 

var questions = [ 
    {
        question: 'In which HTML element do we place JavaScript code?', 
        option1: 'script', 
        option2: 'javascript', 
        option3: 'title', 
        option4: 'style', 
        correctAnswer: "script", 
    },

    {
        question: 'If you want to reference a class using CSS, which of the following is correct ?', 
        option1: '.', 
        option2: '_', 
        option3: '#', 
        option4: '*',  
        correctAnswer: "."
    },

    {
        question: 'Choose from the three types of styling what the following code style represents: <link href="style.css rel="stylesheet" type= "text/css">', 
        option1: 'internal', 
        option2: 'external', 
        option3: 'in-line', 
        option4: 'line', 
        correctAnswer: "internal"
    },
    {
        question: 'How do you create a function in JavaScript?', 
        option1: 'function myFunction()', 
        option2: 'function:myFunction()',
        option3: 'function = myFunction()',
        option4: 'function-myFunction()', 
        correctAnswer: 'function myFunction()'

    }
] 
console.log('questions', questions); // testing purposes  

// global variables used for questionsFunction 
var quesIndex = 0; 
var questionContainer = document.getElementById('question-container')
var answerbtn1 = document.getElementById('answer-btn1');
var answerbtn2 = document.getElementById('answer-btn2');
var answerbtn3 = document.getElementById('answer-btn3');
var answerbtn4 = document.getElementById('answer-btn4');


// event listener 
var startButton = document.getElementById('start');
startButton.addEventListener('click', countDownStartQuiz);

// variable initializer to hold value of 60    
var startSeconds = 60; 

// variable that is assigned to the countdown p element which will display on HTML when triggered
var count = document.getElementById('countdown');
var funcInterval;

// function that will be called once the start button is clicked 

function countDownStartQuiz () {

    questionsFunc(); 

    funcInterval = setInterval(function() {
        startSeconds--; 
        count.textContent = startSeconds; // show the decrement in seconds on HTML 

        if (startSeconds <= 0) {
            clearInterval(funcInterval); 
            return outOfTime(); 
        }
    }, 1000);
};


// question function that will render questions and answers to page 
function questionsFunc () {

    questionContainer.textContent= ''; 

    var quizQuestions = questions[quesIndex]; 

    questionContainer.textContent = quizQuestions.question; 
    answerbtn1.textContent = quizQuestions.option1;
    answerbtn2.textContent = quizQuestions.option2; 
    answerbtn3.textContent = quizQuestions.option3;
    answerbtn4.textContent = quizQuestions.option4; 

    console.log('quizquestions', quizQuestions);  // testing purposes 
}; 

// global variable that will be used to indicate the number of questions in array 

var lastQuesIndex = questions.length; 

// function that will display the correct answer when user chooses an option 

////////----------------------------------------------NEED TO COME BACK TO THIS -BROKEN/INCORRECT CODE--------------------------------------------------------
    
function displayAnswer () { 

    var answerCorrect = questions[quesIndex].correctAnswer; 
    
    $('.btn').click(function() {
        var value = $(this).val(); 
        var button1 = 'submit1'; 

    if (button1 === value && quesIndex !== lastQuesIndex) {
            // correctAnswer.textContent = "You are correct!"; 
            alert("correct"); 
            quesIndex++; 
            questionsFunc(); 
    } else 
            (alert("incorrect")); 
    
})};

////////----------------------------------------------NEED TO COME BACK TO THIS -BROKEN/INCORRECT CODE--------------------------------------------------------
