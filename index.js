var readlineSync = require("readline-sync");

var score= 0
var userName= readlineSync.question("What's your name? ");

console.log("Welcome " +userName+ " to DO YOU KNOW Sobhan");




// play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Right!")
    score++
  
  }else{
    console.log("Wrong!")
    score--
  }

  console.log("Current Score:", score)
  console.log("-----------")
}



var questions=[{
  question: "Where do i live? ",
  answer: "Bhubaneswar"
}, 
{
  question: "Who's my favourite superhero? ",
  answer: "Batman", 
}, 
{ 
  question: "What's my favourite food? ", 
  answer: "Pizza" 
}, 
{ 
  question: "What's my Dream place to visit? ",
  answer: "Chicago" 
}, 
{ 
  question: "Which app do i use the most? ", 
  answer: "Whatsapp" }]

for (var i=0; i<questions.length;i++){
  var currentquestion = questions[i]
  play(currentquestion.question, currentquestion.answer)
}

console.log("Your Score:", score)

