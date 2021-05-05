'use strict'

// before we grill the user, lets greet them
function getName() {
let userName = prompt("Hello! What is your name?");
console.log("user name is " + userName);
alert("Welcome to my my page " + userName + ". My name is Steven Boston. Now for some trivia about me!");
return userName
}
//Grab a tank of propane, it's time to barbecue!
//We are grilling in the interrogation sense, to be clear.
function grill(userName) {
let questions = [//these will be the questions
  'Is my dog Maggie the best dog there is?',
  'Do I serve as a judge at magic tournaments?',
  'Do I play any instruments?',
  'Do I ever not wear blue shorts?',
  'Am I capable of asking a question without a joke sewn in?',
]
let comments = [//these will be the comments after we tell the user their response
  "Maggie isn't the best dog there is, she's the best there has EVER BEEN",
  "I run tournaments for 5-7 stores at any given time when there isn't a pandemic",
  "I play of variety of woodwind instruments, primarily saxophone, though I haven't played seriously in many years.",
  "Many people who know me claim I only ever wear blue shorts, but I think I also have a pair of grey cargo shorts, so that is just clearly false.",
  "Of course I am! Did you think I was joking about Maggie?",
]
let answers = []
for 
}