
var correctAnswer = 0;
var incorrectAnswer = 0;
var questionCorrectAnswer;
var timeLeft = 30;
var questionNumber = 0;

//make array of questions
var questions = [
    "What fast food chain sells the whopper?",
    "What fast food chain sells the big mac?",
    "What fast food chain sells the triple layer nacho?",
    "What fast food chain sells animal fries?",
    "What fast food chain sells kentucky fried chicken?"
];

var correctChoices = [
    "Burger King",
    "Mcdonalds",
    "Taco Bell",
    "In-N-Out",
    "KFC"
];

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


$("#startButton").hide();
$("#resetButton").hide();


