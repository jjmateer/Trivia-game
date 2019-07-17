
var timerInterval;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var questionCorrectAnswer;
var timeLeft = 15;
var questionNumber = 0;
var clockRunning = false;
var questionChoiceshtml = [];
// $("#resetButton").hide();
// //Array of questions
// var questions = [
//     "What fast food chain sells the whopper?",
//     "What fast food chain sells the big mac?",
//     "What fast food chain sells the triple layer nacho?",
//     "What fast food chain sells animal fries?",
//     "What fast food chain sells kentucky fried chicken?"
// ];
// //Correct answers
// var correctChoices = [
//     "Burger King",
//     "Mcdonalds",
//     "Taco Bell",
//     "In-N-Out",
//     "KFC"
// ];
// //Choices for questions
// var questionChoices = [
//     ["Mcdonalds", "Carl's Jr.", "Burger King", "Taco Bell"],
//     ["Mcdonald's", "Taco Bell", "Carl's Jr.", "Burger King"],
//     ["Burger King", "Carl's Jr.", "Mcdonald's", "Taco Bell"],
//     ["In - N - Out", "Burger King", "Carl's Jr.", "Taco Bell"],
//     ["Carl's Jr.", "Burger King", "KFC", "Taco Bell"]
// ];



//make an array displaying the questions, answers, and correct answers
var questionKey = [
    {
        "question": "What fast food chain sells the whopper?",
        "choices": ["Mcdonalds", "Carl's Jr.", "Burger King", "Taco Bell"],
        "correct": "Burger King"
    },
    {
        "question": "What fast food chain sells the big mac?",
        "choices": ["Mcdonald's", "Taco Bell", "Carl's Jr.", "Burger King"],
        "correct":"Mcdonalds" 
    },
    {
        "question": "What fast food chain sells the triple layer nacho?",
        "choices": ["Burger King", "Carl's Jr.", "Mcdonald's", "Taco Bell"],
        "correct": "Taco Bell"
    },
    {
        "question": "What fast food chain sells animal fries?",
        "choices": ["In - N - Out", "Burger King", "Carl's Jr.", "Taco Bell"],
        "correct": "In-N-Out"
    },
    {
        "question": "What fast food chain sells kentucky fried chicken?",
        "choices": ["Carl's Jr.", "Burger King", "KFC", "Taco Bell"],
        "correct": "KFC"
    }
]

function displayQuestion() {
    $("#triviaQuestion").html(`${questionKey[questionNumber].question} 
    <span class="question"> (Question ${questionNumber + 1} of ${questionKey.length})</span>`);

}

function displayChoices() {
    for (i = -1; i < questionKey[questionNumber].choices.length; i++) {
        $("#userChoices").append(`<div class="choices"><input type="radio" name="choices" 
        value="${questionKey[questionNumber].choices[i]}"> ${questionKey[questionNumber].choices[i]}</div>`);
    }
}

// function displayChoices() {
//     for (var i = -1; i < questionKey[questionNumber].answers; i++) {
//         questionChoiceshtml.push('<btn id="choices">' + questionChoices[i] + '</btn>');
//     }
//     for (var i = -1; i < questionChoices; i++) {
//         $("#userChoices").html(questionChoiceshtml[i]);
//         $("#choices").on("click", function () {
//             evaluate();
//             questionNumber++;
//             $("#choices")
//         });
//     }


// }

function timeConverter(t) {
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60)
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return `${minutes}:${seconds}`;
}

function countdownTimer() {
    timeLeft--;
    let convertedTime = timeConverter(timeLeft);
    $("#timeRemaining").html(convertedTime);
    if (timeLeft === 0) {
        unanswered++;
        questionNumber++;
        timeout();
        reset();
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 15;
    let convertedTime = timeConverter(timeLeft);
    $("#timeRemaining").html(convertedTime);

}
function startTimer() {
    clockRunning = true;
    timerInterval = setInterval(countdownTimer, 1000);
}



function timeout() {

    clearInterval(timerInterval);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was: " + correct);
    $("#correctdiv").empty();
    setTimeout(function () { reset }, 3000);


}

function reset() {
    if (questionNumber === questionKey.length) {
        clockRunning = false;
        resetTimer();
        $("triviaquestion").empty();
        $("#userChoices").empty();
        $(".timeRemaining").empty();
        $("userchoices").html(correctAnswers + incorrectAnswers + unanswered);

    }
    else {
        resetTimer();
        $("#triviaQuestion").empty();
        displayChoices();
        $("#userchoices").empty();
        displayQuestion();
        questionCorrectAnswer = questionKey[questionNumber].correct;
        startTimer();
        questionNumber++;
        $("#correctdiv").text("Correct answer: " + questionCorrectAnswer);
    }
}


$("#nextBtn").on("click", function () {
    var qChoices = document.getElementsByName("choices");
    let trueFalse = false;
    var userChoice;
    $("#userChoices").empty();
    for (i = 0; i < qChoices.length; i++) {

        if (qChoices[i].checked) {
            trueFalse = true;
            userChoice = qChoices[i].value;
        }
    }


    if (userChoice === questionCorrectAnswer) {
        alert("correct!");
        correctAnswers++;
        questionNumber++;
        reset();
    } else {
        alert("wrong!")
        incorrectAnswers++;
        questionNumber++;
        reset();
    }

});

$("#startBtn").on("click", function () {
    displayQuestion();
    displayChoices();
    startTimer();
    $("#resetBtn").hide();
    $("#startBtn").hide();



});