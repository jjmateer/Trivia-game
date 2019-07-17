
var timerInterval;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var questionCorrectAnswer;
var timeLeft = 30;
var questionNumber = 0;
var clockRunning = false;
$("#resetButton").hide();


    $("#question1").text("What fast food chain sells the whopper?");

    $("#question2").text("What fast food chain sells the big mac?");
    $("#question3").text("What fast food chain sells the triple layer nacho?");
    $("#question4").text("What fast food chain sells animal fries?");
    $("#question5").text("What fast food chain sells kentucky fried chicken?");

    $("#btn11")





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
        clearInterval(timerInterval);
    }
}


function startTimer() {
    clockRunning = true;
    timerInterval = setInterval(countdownTimer, 1000);
}



function timeout() {
    clearInterval(timerInterval);
    $("#startButton").text("Time out!!");





}



$("#submit").on("click", function () {



if (userChoice === questionCorrectAnswer) {
 
        correctAnswers++;


    } else {

        incorrectAnswers++;

    }

});

$("#startBtn").on("click", function () {
    startTimer();
    $("#resetBtn").hide();
    $("#startBtn").hide();



});