
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
 

// global variable that will be used to indicate the number of questions in array 

var lastQuesIndex = questions.length; 

// function that will display the correc tanswer when user chooses an option 

function displayAnswer () { 

    $('#answer-btn1').click(function() {

        var correct = questions[0].correctAnswer;
        var option = "script";

    if (correct === option && quesIndex !== lastQuesIndex) {
            // correctAnswer.textContent = "You are correct!"; 
            alert("correct"); 
            quesIndex++; 
            questionsFunc(); 
    } else 
            (alert("incorrect")); 
    
        
        // } else (value !== submit && quesIndex !== lastQuesIndex); 
        //     // correctAnswer.textContent = "You are incorrect!"; 
        //   
        //     questionsFunc();
    
})};


// function displayAnswer1 () { 
//     $('#answer-btn1').click(function(){
//         var value = $(this).val();
//         console.log('value', value);
//         // var submit = 'submit';
//         // var submit = $("answer-btn1").val(); 
//         var submit = value; 
//         console.log('submit', submit);

//     if(value === submit && quesIndex !== lastQuesIndex) {
//             // correctAnswer.textContent = "You are correct!"; 
//   
//             quesIndex++; 
//             questionsFunc(); }
//         // } else (value !== submit && quesIndex !== lastQuesIndex); 
//         //     // correctAnswer.textContent = "You are incorrect!"; 
//         //   
//         //     questionsFunc();
//     })
// };
























































// function displayAnswer () { 
//     $('.btn').click(function(){
//         var value = $(this).val();
//     if(value === "submit" && quesIndex !== lastQuesIndex) {
//             correctAnswer.textContent = "You are correct!"; 
//             quesIndex++; 
//             questionsFunc(); 
//         } else if (value !== "submit" && quesIndex !== lastQuesIndex); 
//             correctAnswer.textContent = "You are incorrect!"; 
//             questionsFunc();
//     })
// };

//     var choice = questions[quesIndex].correctAnswer; 
//     console.log('choice', choice);
//     if (correct === choice && quesIndex !== lastQuesIndex) {
//         startSeconds++;
//         alert('You chose correctly'); 
//         quesIndex++;
//         questionsFunc(); 
//     } else if (correct !== choice && quesIndex !== lastQuesIndex) {
//         alert("You chose incorrectly"); 
//         questionsFunc(); 
//     } else {
//         console.log("still working on this") // displayScore(); need to create this function 
//     }

// } 



// function displayAnswer () {
//     $('.btn').click(function(){
//         var val = $(this).val(); 
//         if(val === 'submit') {
//           correctAnswer.textContent = "Correct"; 
//           console.log("correct choice");
//         //   var addSeconds = 10; 
//         //   var added = startSeconds + addSeconds;  
//         //   count.innerText= added; 
//           startSeconds += 10;  
//         } else {
//             console.log("Incorrect");
//             correctAnswer.textContent = "Incorrect";
//             startSeconds -= 10;  
//         }
//     })
// };

var startButton = document.getElementById('start');
startButton.addEventListener('click', countDownStartQuiz);
