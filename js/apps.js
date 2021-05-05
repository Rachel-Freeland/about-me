'use strict'
grill(getName());//This is all we will actually be doing. Now to make that mean something. 
// before we grill the user, lets greet them
function getName() {
let userName = prompt("Hello! What is your name?");
console.log("user name is " + userName);
alert("Welcome to my my page " + userName + ". My name is Steven Boston. Now for some trivia about me!");
return userName //This isn't needed in the current build, but I was considering using the name in grill.
};
//Grab a tank of propane, it's time to barbecue!
//We are grilling in the interrogation sense, to be clear.
function grill(userName) {
let questions = [//these will be the questions
  'Is my dog Maggie the best dog there is?',
  'Do I serve as a judge at magic tournaments?',
  'Do I play any instruments?',
  'Do I ever not wear blue shorts?',//I certainly don't want to.   
  'Am I capable of asking a question without a joke sewn in?',//I'm not even capable of making a serious comment on my code. 
];
let comments = [//these will be the comments after we tell the user their response
  "Maggie isn't the best dog there is, she's the best there has EVER BEEN",
  "I run tournaments for 5-7 stores at any given time when there isn't a pandemic",
  "I play of variety of woodwind instruments, primarily saxophone, though I haven't played seriously in many years.",
  "Many people who know me claim I only ever wear blue shorts, but I think I also have a pair of grey cargo shorts, so that is just clearly false.",
  "Of course I am! Did you think I was joking about Maggie?",//Hint: I wasn't
];
let answers = [];
let n = 0;
alert("For each question, please answer yes or no.");
for (n = 0; n<5; n++) {//This for loop will run through the above arrays while also adding to the answers array
answers[n] = prompt(questions[n]);
if (answers[n].toLowerCase() === 'yes' || answers[n].toLowerCase() === 'no') {//yes or no only, please. 
alert("You answered " + answers[n] + ". \n\n" + comments[n]);
} else { //answer yes or no, OR ELSE
  alert('Please remember to answer with only yes or no');//seriously, only yes or no. 
  n-- }}}