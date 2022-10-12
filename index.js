var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name : "Abhi",
    score : 6
  },
 
  {
    name : "Harsh",
    score : 5
  },

  {
    name : "Murtaza",
    score : 4
  },

  
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Indore"
},
 {
  question: "My favorite phone brand is? ",
  answer: "one plus"
},
{
  question: "Where do I born? ",
  answer: "Indore"
},
{
  question: "Whats my favourite color?",
  answer : "black"
},

{
  question: "I am single, Ture or False? ",
  answer: "False"
},

{
  question:"What is my birthday month?",
  answer :"august"
},
{
  question :"What is my nick name?",
  answer:"radio"
},
{
  question : "What is my name is online games?",
  answer : "john"
},

{
  question:"Which brand smartphone i am using currently?",
  answer : "oppo"
}

];

function welcomeMssg() {
 var userName = readlineSync.question("What's your name? ");

  console.log("\nWelcome "+ userName + " to 'DO YOU KNOW MURTAZA' ?\n");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: \n", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it\n");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcomeMssg();
game();
showScores();

