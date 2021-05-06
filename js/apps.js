'use strict';

let answers = [];//get a container for the answers set up
let points = 0;

function getName() {
  let userName = prompt('Hello! What is your name?');
  console.log('user name is ' + userName);
  alert('Welcome to my my page ' + userName + '. My name is Steven Boston. Now for some trivia about me!');
  return userName;
}

function binaryQuestions() {
  let questions = [//these will be the questions
    'Is my dog Maggie the best dog there is?',
    'Do I serve as a judge at magic tournaments?',
    'Do I play any instruments?',
    'Do I ever not wear blue shorts?',//I certainly don't want to.
    'Am I capable of asking a question without a joke sewn in?',//I'm not even capable of making a serious comment on my code.
    'I mentioned I have played several woodwinds besides Saxophones, can you guess one?'
  ];

  let answerKey =['no','yes','yes','yes','yes'];
  let comments = [//these will be the comments after we tell the user their response
    'Maggie isn\'t the best dog there is, she\'s the best there has EVER BEEN',
    'I run tournaments for 5-7 stores at any given time when there isn\'t a pandemic',
    'I play of variety of woodwind instruments, primarily saxophones, though I haven\'t played seriously in many years.',
    'Many people who know me claim I only ever wear blue shorts, but I think I also have a pair of grey cargo shorts, so that is just clearly false.',
    'Of course I am! Did you think I was joking about Maggie?',//Hint: I wasn't
  ];
  alert('For each question, please answer yes or no.');
  for (let n = 0; n<5; n++) {//This for loop will run through the above arrays while also adding to the answers array
    answers[n] = prompt(questions[n]);
    if (answers[n].toLowerCase() === 'yes' || answers[n].toLowerCase() === 'no') {//yes or no only, please.
      let correct = 'Incorrect!';
      if (answerKey[n] === answers[n].toLowerCase()) {
        correct = 'Correct!';
        points++;
      }
      console.log(answers[n]);
      alert('You answered ' + answers[n] + '. '+ correct + '\n\n' + comments[n]);
    } else { //answer yes or no, OR ELSE
      alert('Please remember to answer with only yes or no');//seriously, only yes or no.
      n--;}
  }
}

function instrumentQuestion() {
  alert('Now for some more open-ended exercises');//numbers? words? it's pandemonium!
  alert('I mentioned before that I play saxophones...');
  let instruments = ['bass clarinet', 'ocarina', 'recorder'];
  let tries = 6;
  for (let ind = 0; ind < 6; ind++) {
    answers[5] = prompt('what is a woodwind instrument I have played other than saxophones?');
    for (let key = 0; key<instruments.length; key++) {//this loops through all correct answers and compares each one
      if (answers[5].toLowerCase() === instruments[key]) {
        alert(instruments[key] + ' is correct!');
        points++;
        ind = (ind+6);
        break;
      }
    }
    if (ind<6) {
      tries = (5-ind);
      if (tries) {
        alert('that isn\'t one of them! You have ' + tries + ' attempts remaining.');
      } else {alert('Sorry, you are out of attempts!');}
    }
  }
  console.log(answers[5]);
}


let randNum = (Math.floor(Math.random() * 100) + 1);
console.log('the number is ' + randNum);
alert('I am thinking of a number between 1 and 100...');
for (let n = 0; n<5; n++) {
  answers[6] = prompt('Which number am I thinking of?');
  if (!(answers[6]/1)) {
    alert('numbers only please!');
    n--;
    continue;
  }
  if (answers[6] === randNum) {
    points++;
    break;
  } else if (answers[6] > randNum) {
    alert('Too High!');}
  else {alert ('Too low!');}
}
alert('The answer was ' + randNum + '!');

alert('Thank you for playing ' + userName + ', your final answers were:\n\n' + answers + '\n\n You got ' + points + ' answers correct.');

// Bonus Round: Sticky header!
window.onscroll = function() {stickyBusiness();};
let header = document.getElementById('stickyHeader');
let stick = header.offsetTop;

function stickyBusiness() {
  if (window.pageYOffset > stick) {
    header.classList.add('sticky');
  } else{
    header.classList.remove('sticky');
  }
}
