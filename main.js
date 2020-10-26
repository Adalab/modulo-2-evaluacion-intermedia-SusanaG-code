'use strict';


//constantes a usar

const submit = document.querySelector('.js-submit');
let userInput = document.querySelector('.js-input');
const tip = document.querySelector('.js-tip');
let trycounter = document.querySelector('.js-counter');

//funcion para generar un número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log('Your random numer is', randomNumber);


//función para adivinar el númeor y sus supuestos

function guessNumber() {
    let userNumber = parseInt(userInput.value);
    let message = '';

    // let userNumber = document.querySelector('.js-input').value;
    //const randomNumber = getRandomNumber(100);


    if (userNumber > randomNumber && userNumber <= 100) {
        message = 'demasiado alto';

    } else if (userNumber < randomNumber) {
        message = 'demasiado bajo';


    } else if (userNumber === randomNumber) {
        message = 'has ganado campeona';


    } else if (userNumber > 100 || userNumber === 0) {
        message = 'el número debe estar entre 1 y 100';
    }

    //contar los intentos

    counter();
    tip.innerHTML = (`Tu número es ${message}`);

}

// Move the feedback logic to a function and execute it on each click.



// Move you counter logic into a function and execute it on each click.
let counterclick = 0;

function counter() {
    counterclick++;
    trycounter.innerHTML = counterclick;
}

function writeThis(word) {
    return console.log(word.repeat(1));
}


//evento
submit.addEventListener('click', guessNumber);



