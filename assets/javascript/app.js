
var timerInterval;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var questionCorrectAnswer;
var timeLeft = 15;
var questionNumber = 0;
var clockRunning = false;
var questionChoiceshtml = [];
// $("#resetButton").hide();
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
var questionKey = [
    {
        "question": questions[0],
        "choices": questionChoices[0],
        "correct": correctChoices[0]
    },
    {
        "question": questions[1],
        "choices": questionChoices[1],
        "correct": correctChoices[1]
    },
    {
        "question": questions[2],
        "choices": questionChoices[2],
        "correct": correctChoices[2]
    },
    {
        "question": questions[3],
        "choices": questionChoices[3],
        "correct": correctChoices[3]
    },
    {
        "question": questions[4],
        "choices": questionChoices[4],
        "correct": correctChoices[4]
    },
]

function displayQuestion() {
    $("#triviaQuestion").html(`${questionKey[questionNumber].question} 
    <span class="question"> (Question ${questionNumber + 1} of ${questionKey.length})</span>`);

}

function displayChoices() {
    for (var i = 0; i < questionChoices[0].length; i++) {
        questionChoiceshtml.push('<button id="choices">' + questionChoices[0][i] + '</button>');
        console.log(Object.keys(questionKey[i]));
    }
    $("#userChoices").html(questionChoiceshtml);
    $("#choices").on("click", function() {
        evaluate();
        });
}

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
        resetTimer();
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
    $("#triviaQuestion").text("The correct answer was: " + correctAnswer);
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
    setTimeout(function(){reset}, 3000);


}

function reset() {
    if (questionNumber === questionKey.length) {
        clockRunning = false;
        resetTimer();
        $("triviaquestion").empty();
        $("#userChoices").empty();
        $(".timeRemaining").empty();
        $("userchoices").html(`
        <div>Number of correct answers: ${correctAnswers}</div>
        <div>Number of wrong answers: ${incorrectAnswers}</div>
        `);

    }
    else {
        resetTimer()
        $("#triviaQuestion").empty();
        displayChoices()
        $("#userchoices").empty();
        displayQuestion();
        questionCorrectAnswer = questionKey[questionNumber].correct;
        startTimer();
        questionNumber++;
        console.log("Correct answer: " + currentCorrectAnswer);
    }
}

function evaluate() {

    var radios = document.getElementsByName("choices");
    var trueFalse = false;
    var userChoice;
    for (i = 0; i < radios.length; i++) {

        if (radios[i].checked) {
            trueFalse = true;
            userChoice = radios[i].value;
        }
    }
    if (!trueFalse) {
        alert("timeout!!");
        for (let i = 0; i > timeLeft; i++) { }
        unanswered++;
        reset();
    }
    else if (userChoice === questionCorrectAnswer) {
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
}

$("#nextBtn"). on("click", function() {
    
});
$("#startBtn").on("click", function() {
    displayQuestion();
    displayChoices();
    startTimer();
    $("#resetBtn").hide();
    $("#startBtn").hide();
    $("#nextBtn").hide();


});