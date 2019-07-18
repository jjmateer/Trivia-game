$("#inputForm").hide();
var timerInterval;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timeLeft = 30;
var clockRunning = false;
var correctChoices = ["burgerking", "mcdonads", "tacobell", "innout","kfc"]

$("#resetButton").hide();
$("#question1").text("What fast food chain sells the whopper?");
$("#question2").text("What fast food chain sells the big mac?");
$("#question3").text("What fast food chain sells the triple layer nacho?");
$("#question4").text("What fast food chain sells animal fries?");
$("#question5").text("What fast food chain sells kentucky fried chicken?");
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
    $("#timeRemaining").html("Time remaining: " + convertedTime);
    if (timeLeft <= 0) {
        unanswered++;
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
// $("#input13").on("click", function () {
// correctAnswers++;
// console.log(correctAnswers);
// $("#input13").off("click")

// });
// $("#input23").on("click", function () {
//     correctAnswers++;
//     console.log(correctAnswers);
//     $("#input23").off("click")
// });
// $("#input33").on("click", function () {
//     correctAnswers++;
//     console.log(correctAnswers);
//     $("#input33").off("click")
// });
// $("#input42").on("click", function () {
//     correctAnswers++;
//     console.log(correctAnswers);
//     $("#input42").off("click")
// });
// $("#input51").on("click", function () {
//     correctAnswers++;
//     console.log(correctAnswers);
//     $("#input51").off("click")
// });

// $("#input11").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input11").off("click")

// });
// $("#input12").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input12").off("click")
// });

// $("#input21").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input21").off("click")
// });

// $("#input22").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input22").off("click")
// });

// $("#input31").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input31").off("click")
// });

// $("#input32").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input32").off("click")
// });

// $("#input41").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input41").off("click")
// });

// $("#input43").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input43").off("click")
// });

// $("#input52").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input52").off("click")
// });

// $("#input53").on("click", function() {
//     incorrectAnswers++;
//     console.log(incorrectAnswers)
//     $("#input53").off("click")
// });


$("#startBtn").on("click", function () {
    $("#inputForm").show();
    startTimer();
    $(this).prop('disabled', true);
});
$("#submit").on("click", function() {
    var checkInput = $("input:checked")
    console.log(checkInput[0]);
    for( var i = 0; i < checkInput.length; i++) {
        var val = $(checkInput[i]).val();
        if(correctChoices.includes(val)) {
            correctAnswers++;

        }
    }

    incorrectAnswers = checkInput.length - correctAnswers;
    $("#inputForm").empty();
    $("#scoreCount").append("Correct answers: " + correctAnswers + "   ");
    $("#scoreCount").append("Incorrect answers: " + incorrectAnswers + "   ");
    clearInterval(timerInterval);
    $(this).prop('disabled', true);

});

