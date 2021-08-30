var readLineSync = require('readline-sync');
var name = readLineSync.question("What's your name?");
var score = 0;
console.log("Welcome, " + name + " are you a Marvel fan?");

function play(question, answer){
  userAnswer = readLineSync.question(question)
  if(userAnswer === answer){
    console.log("Your answer is correct!");
    score = score + 1;
    console.log("Your Score : " + score);
  }
  else{
    console.log("That's thee wrong answer!");
    console.log("Your Score : " + score);
  }
}

questions = [{
  question : "Who is the first avenger?",
  answer : "Captain America"
},
{
  question : "Who is the strongest avenger?",
  answer : "Thor"
},
{
  question : "Which indiviual avenger movie is the highest grossing?",
  answer : "Spiderman"
},

]

for (var i=0; i<questions.length; i++){
  currQuestion = questions[i];

  play(currQuestion.question, currQuestion.answer);
  
}


console.log("Your final score is : " + score);