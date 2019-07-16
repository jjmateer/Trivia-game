var timerInterval;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var questionCorrectAnswer;
var timeLeft = 15;
var questionNumber = 0;
clockRunning = false;

$("#resetButton").hide();
//Array of questions
var questions = [
    "What fast food chain sells the whopper?",
    "What fast food chain sells the big mac?",
    "What fast food chain sells the triple layer nacho?",
    "What fast food chain sells animal fries?",
    "What fast food chain sells kentucky fried chicken?"
];
//Correct answers
var correctChoices = [
    "Burger King",
    "Mcdonalds",
    "Taco Bell",
    "In-N-Out",
    "KFC"
];
//Choices for questions
var questionChoices = [
    ["Mcdonalds", "Carl's Jr.", "Burger King", "Taco Bell"],
    ["Mcdonald's", "Taco Bell", "Carl's Jr.", "Burger King"],
    ["Burger King", "Carl's Jr.", "Mcdonald's", "Taco Bell"],
    ["In - N - Out", "Burger King", "Carl's Jr.", "Taco Bell"],
    ["Carl's Jr.", "Burger King", "KFC", "Taco Bell"]
];

//make an array displaying the questions, answers, and correct answers
const questionKey = [
    {
        "question" : questions[0],
        "choices" : questionChoices[0],
        "correct" : correctChoices[0]
    },
    {
        "question" : questions[1],
        "choices" : questionChoices[1],
        "correct" : correctChoices[1]
    },
    {
        "question" : questions[2],
        "choices" : questionChoices[2],
        "correct" : correctChoices[2]
    },
    {
        "question" : questions[3],
        "choices" : questionChoices[3],
        "correct" : correctChoices[3]
    },
    {
        "question" : questions[4],
        "choices" : questionChoices[4],
        "correct" : correctChoices[4]
    },
]
function displayQuestion() {
    $("#triviaQuestion").html(`${questionKey[questionNumber].question} 
    <span class="question-counter"> (Question ${questionNumber + 1} of ${questionKey.length})</span>`);
}
function displayAnswers() {
    for (i = 0; i < questionKey[questionNumber].answers.length; i++) {
        $("#triviaQuestion").append(`<div class="answers">
    value="${questionKey[questionNumber].correctChoices[i]}"> ${questionKey[questionNumber].correctChoices[i]}</div>`);
    }
}

function timeConverter(t) {
    let minutes = Math.floor(t/60);
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
    if(time === 0) {
        incorrectAnswers++;
        questionNumber++;
        resetTimer();
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 15;
    let convertedTime = convertTime(time);
    $("#timeRemaining").html(convertedTime);

}
function startTimer() {
    clockRunning = true;
    timerInterval = setInterval(countdownTimer, 1000);
}


const timeouts = [
function timeout1() {
    clearInterval(timerInterval);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was Burger King!");
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');


    unanswered++;
},
function timeout2() {
    clearInterval(timerInterval);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was Mcdonald's!");
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');


    unanswered++;
},
function timeout3() {
    clearInterval(timerInterval);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was Taco Bell!");
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');


    unanswered++;
},
function timeout4() {
    clearInterval(timerInterval);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was In-N-Out!");
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/inNOutgif.webp" />');


    unanswered++;
},
function timeout5() {
    clearInterval(timerInterval);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was KFC!");
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');


    unanswered++;
}
];
function startTimer() {
    timerInterval = setInterval(decrementTimer, 1000);
    timerRunning = true;
}


$("#startBtn").on("click",function() {
    $("#startBtn").hide();

});