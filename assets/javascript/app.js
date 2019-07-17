$("#inputForm").hide();
var timerInterval;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timeLeft = 30;
var clockRunning = false;
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
    if (timeLeft === 0) {
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
$("#input13, #input23, #input33, #input42, #input51").on("click", function () {
correctAnswers++;
console.log(correctAnswers);
$(this).prop('disabled', true);

});
$("#input11, #input12, #input21, #input22, #input31, #input32, #input41, #input43, #input52, #input53").on("click", function() {
    incorrectAnswers++;
    console.log(incorrectAnswers)
    $(this).prop('disabled', true);

});
$("#startBtn").on("click", function () {
    $("#inputForm").show();
    startTimer();
    $(this).prop('disabled', true);
});
$("#submit").on("click", function() {
    $("#inputForm").empty();
    $("#scoreCount").append("Correct answers: " + correctAnswers + "   ");
    $("#scoreCount").append("Incorrect answers: " + incorrectAnswers + "   ");
    $("#scoreCount").append("Unanswered: " + unanswered + "   ");
    clearInterval(timerInterval);
    $(this).prop('disabled', true);

});

