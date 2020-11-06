"use strict";

//Global variables
const submit = document.querySelector(".js-submit");
let userInput = document.querySelector(".js-input");
const tip = document.querySelector(".js-tip");
let trycounter = document.querySelector(".js-counter");

//Random Number function
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log("Your random numer is", randomNumber);

//Guess number function and conditionals
function guessNumber() {
  let userNumber = parseInt(userInput.value);
  let text = "";

  if (userNumber > randomNumber && userNumber <= 100) {
    text = "demasiado alto";
  } else if (userNumber < randomNumber) {
    text = "demasiado bajo";
  } else if (userNumber === randomNumber) {
    text = "has ganado campeona";
  } else if (userNumber > 100 || userNumber === 0) {
    text = "el número debe estar entre 1 y 100";
  }

  counter();
  showFeedback(text);
}

//

//Feedback function
const showFeedback = (text) => {
  const tip = document.querySelector(".js-tip");
  tip.innerHTML = text;
};

//Counter logic function
let counterclick = 0;
const counter = () => {
  counterclick++;
  trycounter.innerHTML = counterclick;
};

//Click event
submit.addEventListener("click", guessNumber);
