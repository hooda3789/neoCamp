var readLineSync = require('readline-sync');
var name = readLineSync.question("What's your name?");
var score = 0;
console.log("Welcome " + name + " do you know Ankit?");

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
  question : "Where do he live?",
  answer : "Delhi"
},
{
  question : "Which is his favorite superhero?",
  answer : "Thor"
},
{
  question : "Where do he work?",
  answer : "Pune"
},

]

for (var i=0; i<questions.length; i++){
  currQuestion = questions[i];

  play(currQuestion.question, currQuestion.answer);
  
}


console.log("Your final score is : " + score);